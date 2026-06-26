import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const packages = await prisma.pricingPackage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(packages);
  } catch (error) {
    console.error("PRICING GET ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch packages" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const pkg = await prisma.pricingPackage.create({
      data: {
        title: body.title,
        price: body.price,
        description: body.description,
      },
    });

    return NextResponse.json({ success: true, package: pkg });
  } catch (error) {
    console.error("PRICING POST ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to create package" },
      { status: 500 }
    );
  }
}