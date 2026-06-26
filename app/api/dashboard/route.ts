import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [totalLeads, totalGallery, totalEstimator, recentLeads] =
      await Promise.all([
        prisma.lead.count(),
        prisma.galleryImage.count(),
        prisma.estimatorRequest.count(),
        prisma.lead.findMany({
          orderBy: { createdAt: "desc" },
          take: 5,
        }),
      ]);

    return NextResponse.json({
      totalLeads,
      totalGallery,
      totalEstimator,
      recentLeads,
    });
  } catch (error) {
    console.error("DASHBOARD GET ERROR:", error);

    return NextResponse.json(
      { success: false, message: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}