import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.execute(
      "SELECT * FROM Lead ORDER BY createdAt DESC"
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error("LEADS GET ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch leads" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    await db.execute({
      sql: `INSERT INTO Lead (name, phone, email, eventType, guests, eventDate, location, message, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'New')`,
      args: [
        body.name,
        body.phone,
        body.email ?? null,
        body.eventType ?? null,
        body.guests ? Number(body.guests) : null,
        body.eventDate ?? null,
        body.location ?? null,
        body.message ?? null,
      ],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("LEADS POST ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create lead" },
      { status: 500 }
    );
  }
}