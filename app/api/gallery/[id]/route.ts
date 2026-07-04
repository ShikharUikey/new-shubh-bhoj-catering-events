import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { unlink } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    // 1. Find image first
    const result = await db.execute({
      sql: "SELECT * FROM GalleryImage WHERE id = ?",
      args: [Number(id)],
    });

    if (result.rows.length === 0) {
      return NextResponse.json(
        { success: false, message: "Image not found" },
        { status: 404 }
      );
    }

    const image = result.rows[0];

    // 2. Delete physical file if local upload
    if (typeof image.imageUrl === "string" && image.imageUrl.startsWith("/uploads/")) {
      const filePath = path.join(process.cwd(), "public", image.imageUrl);
      if (existsSync(filePath)) {
        await unlink(filePath);
      }
    }

    // 3. Delete database record
    await db.execute({
      sql: "DELETE FROM GalleryImage WHERE id = ?",
      args: [Number(id)],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("GALLERY DELETE ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}