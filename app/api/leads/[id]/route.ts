import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await db.execute({
      sql: "DELETE FROM Lead WHERE id = ?",
      args: [Number(id)],
    });
    return NextResponse.json({ success: true, message: "Lead deleted successfully" });
  } catch (error) {
    console.error("LEADS DELETE ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}