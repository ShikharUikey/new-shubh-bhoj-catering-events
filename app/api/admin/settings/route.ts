import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { db } from "@/lib/db";
import bcrypt from "bcryptjs";
import { verifyToken, signToken } from "@/lib/auth";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.username) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const username = payload.username as string;
    return NextResponse.json({ success: true, username });
  } catch (error) {
    console.error("Get admin info error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const payload = await verifyToken(token);
    if (!payload || !payload.username) {
      return NextResponse.json(
        { success: false, message: "Unauthorized" },
        { status: 401 }
      );
    }

    const currentUsername = payload.username as string;
    const body = await req.json();
    const { action } = body;

    // Fetch the admin from DB
    const adminResult = await db.execute({
      sql: "SELECT * FROM Admin WHERE username = ? LIMIT 1",
      args: [currentUsername],
    });
    const admin = adminResult.rows[0];

    if (!admin) {
      return NextResponse.json(
        { success: false, message: "Admin not found" },
        { status: 404 }
      );
    }

    if (action === "username") {
      const { newUsername, password } = body;

      if (!newUsername || !password) {
        return NextResponse.json(
          { success: false, message: "New username and password are required" },
          { status: 400 }
        );
      }

      // Verify password
      const isMatch = await bcrypt.compare(password, admin.password as string);
      if (!isMatch) {
        return NextResponse.json(
          { success: false, message: "Incorrect password" },
          { status: 401 }
        );
      }

      // Check if new username is already taken (and is different from current)
      if (newUsername !== currentUsername) {
        const checkResult = await db.execute({
          sql: "SELECT 1 FROM Admin WHERE username = ? LIMIT 1",
          args: [newUsername],
        });
        if (checkResult.rows.length > 0) {
          return NextResponse.json(
            { success: false, message: "Username is already taken" },
            { status: 400 }
          );
        }
      }

      // Update username in DB
      await db.execute({
        sql: "UPDATE Admin SET username = ? WHERE id = ?",
        args: [newUsername, admin.id],
      });

      // Sign a new token and update the cookie
      const newToken = await signToken({ username: newUsername });
      
      const response = NextResponse.json({ success: true, message: "Username updated successfully" });
      response.cookies.set("token", newToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24, // 1 day
      });

      return response;

    } else if (action === "password") {
      const { currentPassword, newPassword } = body;

      if (!currentPassword || !newPassword) {
        return NextResponse.json(
          { success: false, message: "Current password and new password are required" },
          { status: 400 }
        );
      }

      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, admin.password as string);
      if (!isMatch) {
        return NextResponse.json(
          { success: false, message: "Incorrect current password" },
          { status: 401 }
        );
      }

      // Hash and update new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      await db.execute({
        sql: "UPDATE Admin SET password = ? WHERE id = ?",
        args: [hashedPassword, admin.id],
      });

      return NextResponse.json({ success: true, message: "Password updated successfully" });

    } else {
      return NextResponse.json(
        { success: false, message: "Invalid action" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Admin settings update error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
