import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const leads = await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(leads);
  } catch (error) {
    console.error("LEADS GET ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch leads",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        eventType: body.eventType,
        guests: body.guests ? Number(body.guests) : null,
        eventDate: body.eventDate,
        location: body.location,
        message: body.message,
      },
    });

    return NextResponse.json({
      success: true,
      lead,
    });

  } catch (error) {
    console.error("LEADS POST ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to create lead",
      },
      {
        status: 500,
      }
    );
  }
}