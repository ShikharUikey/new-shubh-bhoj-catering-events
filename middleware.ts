import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Public route — always allow login page through
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Read the HttpOnly auth cookie set by /api/admin/login
  const token = request.cookies.get("admin-token")?.value;

  // No token → redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/admin/login", request.url));
  }

  try {
    // Valid token → allow through
    jwt.verify(token, process.env.JWT_SECRET!);
    return NextResponse.next();
  } catch {
    // Invalid or expired token → clear cookie and redirect to login
    const response = NextResponse.redirect(
      new URL("/admin/login", request.url)
    );
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