import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const requests = await prisma.estimatorRequest.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(requests);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await prisma.estimatorRequest.create({
      data: {
        name: body.name,
        phone: body.phone,
        eventType: body.eventType,
        guests: body.guests,
        budget: body.budget,
        eventDate: body.eventDate,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      { status: 500 }
    );
  }
}