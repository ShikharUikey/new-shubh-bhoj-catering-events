import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

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

// Resolves to <project-root>/public/uploads/gallery at runtime
const UPLOAD_DIR = path.join(process.cwd(), "public", "uploads", "gallery");

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Extracts the file extension from a filename and normalises it to lowercase.
 * Returns an empty string if no extension is found.
 */
function getExtension(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  return ext;
}

/**
 * Generates a unique filename using a timestamp + random suffix so that
 * concurrent uploads with the same source name never collide.
 *
 * Format: <timestamp>-<randomHex><ext>
 * Example: 1718123456789-a3f9c2.jpg
 */
function generateUniqueFilename(ext: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(16).slice(2, 8); // 6 hex chars
  return `${timestamp}-${random}${ext}`;
}

/**
 * Ensures the upload directory exists, creating it (recursively) if needed.
 */
async function ensureUploadDir(): Promise<void> {
  if (!existsSync(UPLOAD_DIR)) {
    await mkdir(UPLOAD_DIR, { recursive: true });
  }
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

    // ── 6. Read file bytes ───────────────────────────────────────────────────
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // ── 7. Ensure upload directory exists ────────────────────────────────────
    await ensureUploadDir();

    // ── 8. Write file to disk ────────────────────────────────────────────────
    const filename = generateUniqueFilename(ext);
    const filePath = path.join(UPLOAD_DIR, filename);

    await writeFile(filePath, buffer);

    // ── 9. Return public URL ─────────────────────────────────────────────────
    const imageUrl = `/uploads/gallery/${filename}`;

    return NextResponse.json(
      { success: true, imageUrl },
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