import { NextResponse } from "next/server";
import { put } from "@vercel/blob";

// ── Constants ────────────────────────────────────────────────────────────────

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes

const ALLOWED_MIME_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
]);

const ALLOWED_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
]);

// ── Helpers ──────────────────────────────────────────────────────────────────

function getExtension(filename: string): string {
  const lastDot = filename.lastIndexOf(".");
  return lastDot === -1 ? "" : filename.slice(lastDot).toLowerCase();
}

function generateUniqueFilename(originalName: string, ext: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(16).slice(2, 8);
  return `gallery/${timestamp}-${random}${ext}`;
}

// ── Route Handler ─────────────────────────────────────────────────────────────

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // ── 1. Parse multipart/form-data ────────────────────────────────────────
    let formData: FormData;

    try {
      formData = await request.formData();
    } catch {
      return NextResponse.json(
        { success: false, message: "Invalid form data — multipart/form-data required" },
        { status: 400 }
      );
    }

    // ── 2. Extract the file field ────────────────────────────────────────────
    const file = formData.get("file");

    if (!file) {
      return NextResponse.json(
        { success: false, message: "No file provided — include a field named 'file'" },
        { status: 400 }
      );
    }

    if (!(file instanceof File)) {
      return NextResponse.json(
        { success: false, message: "The 'file' field must be a file, not a text value" },
        { status: 400 }
      );
    }

    // ── 3. Validate MIME type ────────────────────────────────────────────────
    if (!ALLOWED_MIME_TYPES.has(file.type)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid file type '${file.type}'. Only jpg, jpeg, png, and webp are allowed.`,
        },
        { status: 415 }
      );
    }

    // ── 4. Validate file extension ───────────────────────────────────────────
    const ext = getExtension(file.name);

    if (!ext || !ALLOWED_EXTENSIONS.has(ext)) {
      return NextResponse.json(
        {
          success: false,
          message: `Invalid file extension '${ext || "(none)"}'. Only .jpg, .jpeg, .png, and .webp are allowed.`,
        },
        { status: 415 }
      );
    }

    // ── 5. Validate file size ────────────────────────────────────────────────
    if (file.size > MAX_FILE_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      return NextResponse.json(
        {
          success: false,
          message: `File too large (${sizeMB} MB). Maximum allowed size is 5 MB.`,
        },
        { status: 413 }
      );
    }

    // ── 6. Upload to Vercel Blob ──────────────────────────────────────────────
    const filename = generateUniqueFilename(file.name, ext);

    const blob = await put(filename, file, {
      access: "public",
      addRandomSuffix: false,
    });

    // ── 7. Return public URL ──────────────────────────────────────────────────
    return NextResponse.json(
      { success: true, imageUrl: blob.url },
      { status: 201 }
    );
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Server error — failed to upload image" },
      { status: 500 }
    );
  }
}