import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const requests = await prisma.estimatorRequest.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(requests);
  } catch (error) {
    console.error("ESTIMATOR GET ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch estimator requests" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const estimatorRequest = await prisma.estimatorRequest.create({
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
      request: estimatorRequest,
    });
  } catch (error) {
    console.error("ESTIMATOR POST ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create estimator request" },
      { status: 500 }
    );
  }
}