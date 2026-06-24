import { prisma } from "@/lib/prisma";

export async function GET() {
  const totalLeads = await prisma.lead.count();

  const totalEstimator =
    await prisma.estimatorRequest.count();

  const recentLeads =
    await prisma.lead.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 5,
    });

  return Response.json({
    totalLeads,
    totalGallery: 0,
    totalEstimator,
    recentLeads,
  });
}