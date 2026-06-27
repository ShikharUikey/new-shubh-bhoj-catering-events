import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully.",
  });

  // Delete authentication cookie
  response.cookies.set("admin-token", "", {
    expires: new Date(0),
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });

  return response;
}