import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

// Call this route via GET to create an initial admin user
export async function GET(req: Request) {
  try {
    const existingAdmin = await prisma.admin.findFirst();
    if (existingAdmin) {
      return NextResponse.json(
        { success: false, message: "Admin already exists" },
        { status: 403 }
      );
    }

    // Default admin credentials
    const defaultUsername = "admin@example.com";
    const defaultPassword = "password123";

    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const admin = await prisma.admin.create({
      data: {
        username: defaultUsername,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
      username: admin.username,
      password: defaultPassword,
    });
  } catch (error) {
    console.error("Setup error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
