import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;

    await prisma.estimatorRequest.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({
      success: true,
      message: "Estimator request deleted",
    });
  } catch (error) {
    console.error("ESTIMATOR DELETE ERROR:", error);

    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}