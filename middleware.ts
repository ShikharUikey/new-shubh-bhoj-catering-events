import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public admin route
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Read auth cookie
  const token = request.cookies.get("admin-token")?.value;

  // No cookie → Login
  if (!token) {
    return NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
  }

  try {
    // Verify JWT
    jwt.verify(token, process.env.JWT_SECRET!);

    return NextResponse.next();
  } catch (error) {
    console.error("JWT Verification Failed:", error);

    const response = NextResponse.redirect(
      new URL("/admin/login", request.url)
    );

    // Remove invalid cookie
    response.cookies.set("admin-token", "", {
      expires: new Date(0),
      path: "/",
    });

    return response;
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};