import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/api/:path*",
};

export function middleware(request: NextRequest) {
  const CACHE_CONTROL_MAX_AGE = 86400;

  const response = NextResponse.next();

  response.headers.set(
    "Cache-Control",
    `public, max-age=${CACHE_CONTROL_MAX_AGE}`
  );

  return response;
}
