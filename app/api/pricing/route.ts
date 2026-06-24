import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  console.log("Pricing Model:", prisma.pricingPackage);
  const packages = await prisma.pricingPackage.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(packages);
}

export async function POST(request: Request) {
  const body = await request.json();

  await prisma.pricingPackage.create({
    data: {
      title: body.title,
      price: body.price,
      description: body.description,
    },
  });

  return NextResponse.json({
    success: true,
  });
}