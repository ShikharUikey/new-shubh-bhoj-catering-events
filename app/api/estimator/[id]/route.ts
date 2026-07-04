import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    await db.execute({
      sql: "DELETE FROM EstimatorRequest WHERE id = ?",
      args: [Number(id)],
    });
    return NextResponse.json({ success: true, message: "Estimator request deleted" });
  } catch (error) {
    console.error("ESTIMATOR DELETE ERROR:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}