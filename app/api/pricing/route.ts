import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await db.execute(
      "SELECT * FROM PricingPackage ORDER BY createdAt DESC"
    );
    return NextResponse.json(result.rows);
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
    await db.execute({
      sql: "INSERT INTO PricingPackage (title, price, description) VALUES (?, ?, ?)",
      args: [body.title, body.price, body.description],
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("PRICING POST ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Failed to create package" },
      { status: 500 }
    );
  }
}