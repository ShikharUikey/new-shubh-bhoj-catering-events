import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export async function GET() {
  const existingAdmin = await prisma.admin.findUnique({
    where: {
      username: "admin",
    },
  });

  if (existingAdmin) {
    return Response.json({
      message: "Admin already exists",
    });
  }

  const hashedPassword = await bcrypt.hash(
    "admin123",
    10
  );

  const admin = await prisma.admin.create({
    data: {
      username: "admin",
      password: hashedPassword,
    },
  });

  return Response.json(admin);
}