import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    console.log("========== LOGIN REQUEST ==========");
    console.log("Email Entered:", email);
    console.log("ENV Email:", process.env.ADMIN_EMAIL);

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    if (email !== process.env.ADMIN_EMAIL) {
      console.log("❌ EMAIL MISMATCH");

      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    console.log("✅ Email matched");

    const passwordValid = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH!
    );

    console.log("Password Valid:", passwordValid);

    if (!passwordValid) {
      console.log("❌ PASSWORD MISMATCH");

      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    console.log("✅ Password matched");

    const token = jwt.sign(
      { email, role: "admin" },
      process.env.JWT_SECRET!,
      {
        expiresIn: "7d",
      }
    );

    const response = NextResponse.json({
      success: true,
    });

    response.cookies.set("admin-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    console.log("✅ LOGIN SUCCESS");

    return response;
  } catch (error) {
    console.error("LOGIN ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal server error.",
      },
      {
        status: 500,
      }
    );
  }
}
