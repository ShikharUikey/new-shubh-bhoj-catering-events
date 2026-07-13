import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";

// Call this route via GET to create an initial admin user
export async function GET(req: Request) {
  try {
    const existingAdminResult = await db.execute("SELECT * FROM Admin LIMIT 1");
    if (existingAdminResult.rows.length > 0) {
      return NextResponse.json(
        { success: false, message: "Admin already exists" },
        { status: 403 }
      );
    }

    // Default admin credentials
    const defaultUsername = "admin@example.com";
    const defaultPassword = "password123";

    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    await db.execute({
      sql: "INSERT INTO Admin (username, password) VALUES (?, ?)",
      args: [defaultUsername, hashedPassword],
    });

    return NextResponse.json({
      success: true,
      message: "Admin created successfully",
      username: defaultUsername,
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
