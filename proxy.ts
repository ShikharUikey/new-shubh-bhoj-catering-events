import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./lib/auth";

export default async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  const verifiedToken = token && (await verifyToken(token).catch(() => null));

  // Protect /admin routes
  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!verifiedToken) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Redirect to admin dashboard if already logged in and trying to access /login
  if (req.nextUrl.pathname === "/login") {
    if (verifiedToken) {
      return NextResponse.redirect(new URL("/admin/dashboard", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};
