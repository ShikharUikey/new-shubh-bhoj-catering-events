import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = await prisma.lead.create({
      data: {
        name: body.name,
        phone: body.phone,
        message: body.message,
      },
    });

    return Response.json({
      success: true,
      lead,
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: "Failed to create lead",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return Response.json(leads);
}