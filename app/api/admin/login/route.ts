import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
  try {
    // 1. Parse request body
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "Email and password are required." },
        { status: 400 }
      );
    }

    // 2. Verify email matches env
    if (email !== process.env.ADMIN_EMAIL) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // 3. Verify password against bcrypt hash in env
    const passwordValid = await bcrypt.compare(
      password,
      process.env.ADMIN_PASSWORD_HASH!
    );

    if (!passwordValid) {
      return NextResponse.json(
        { success: false, message: "Invalid credentials." },
        { status: 401 }
      );
    }

    // 4. Sign JWT
    const token = jwt.sign(
      { email, role: "admin" },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    // 5. Set HttpOnly cookie — this is what middleware reads
    const response = NextResponse.json({ success: true });

    response.cookies.set("admin-token", token, {
      httpOnly: true,   // not accessible from JS — protects against XSS
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days, matches JWT expiry
    });

    return response;
  } catch (error) {
    console.error("Admin login error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error." },
      { status: 500 }
    );
  }
}