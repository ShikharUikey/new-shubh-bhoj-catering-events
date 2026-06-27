import { prisma } from "@/lib/prisma";
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
    const image = await prisma.galleryImage.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          message: "Image not found",
        },
        { status: 404 }
      );
    }

    // 2. Delete physical file if it's a local upload
    if (image.imageUrl.startsWith("/uploads/")) {
      const filePath = path.join(
        process.cwd(),
        "public",
        image.imageUrl
      );

      if (existsSync(filePath)) {
        await unlink(filePath);
      }
    }

    // 3. Delete database record
    await prisma.galleryImage.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("GALLERY DELETE ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: String(error),
      },
      {
        status: 500,
      }
    );
  }
}