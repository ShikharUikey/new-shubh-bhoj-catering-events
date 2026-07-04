import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await db.execute({
      sql: "DELETE FROM PricingPackage WHERE id = ?",
      args: [Number(id)],
    });
    return NextResponse.json({ success: true, message: "Package deleted successfully" });
  } catch (error) {
    console.error("PRICING DELETE ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}