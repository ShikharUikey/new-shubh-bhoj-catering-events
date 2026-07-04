import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.execute(
      "SELECT * FROM GalleryImage ORDER BY createdAt DESC"
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("GALLERY GET ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch gallery images" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await db.execute({
      sql: "INSERT INTO GalleryImage (imageUrl) VALUES (?)",
      args: [body.imageUrl],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("GALLERY POST ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save image" },
      { status: 500 }
    );
  }
}