import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const images =
    await prisma.galleryImage.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

  return NextResponse.json(images);
}

export async function POST(request: Request) {
  const body = await request.json();

  const image =
    await prisma.galleryImage.create({
      data: {
        imageUrl: body.imageUrl,
      },
    });

  return NextResponse.json({
    success: true,
    image,
  });
}