import { NextRequest, NextResponse } from "next/server";

export function middleware(
  request: NextRequest
) {
  const path = request.nextUrl.pathname;

  if (path.startsWith("/admin")) {
    const loggedIn =
      request.cookies.get("adminLoggedIn");

    if (!loggedIn) {
      return NextResponse.redirect(
        new URL("/login", request.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};