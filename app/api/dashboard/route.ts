import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [leadsCount, galleryCount, estimatorCount, recentLeads] =
      await Promise.all([
        db.execute("SELECT COUNT(*) as count FROM Lead"),
        db.execute("SELECT COUNT(*) as count FROM GalleryImage"),
        db.execute("SELECT COUNT(*) as count FROM EstimatorRequest"),
        db.execute("SELECT * FROM Lead ORDER BY createdAt DESC LIMIT 5"),
      ]);

    return NextResponse.json({
      totalLeads: Number(leadsCount.rows[0]?.count ?? 0),
      totalGallery: Number(galleryCount.rows[0]?.count ?? 0),
      totalEstimator: Number(estimatorCount.rows[0]?.count ?? 0),
      recentLeads: recentLeads.rows ?? [],
    });
  } catch (error) {
    console.error("DASHBOARD GET ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}