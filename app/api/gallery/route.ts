import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(images);
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

    const image = await prisma.galleryImage.create({
      data: { imageUrl: body.imageUrl },
    });

    return NextResponse.json({ success: true, image });
  } catch (error) {
    console.error("GALLERY POST ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to upload image" },
      { status: 500 }
    );
  }
}