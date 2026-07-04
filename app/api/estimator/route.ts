import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.execute(
      "SELECT * FROM EstimatorRequest ORDER BY createdAt DESC"
    );
    return NextResponse.json(result.rows);
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
    await db.execute({
      sql: `INSERT INTO EstimatorRequest (name, phone, eventType, guests, budget, eventDate)
            VALUES (?, ?, ?, ?, ?, ?)`,
      args: [
        body.name,
        body.phone,
        body.eventType,
        Number(body.guests),
        body.budget,
        body.eventDate,
      ],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("ESTIMATOR POST ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create estimator request" },
      { status: 500 }
    );
  }
}