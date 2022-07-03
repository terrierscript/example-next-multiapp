import { NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  if (process.env.APP_MODE === "subapp") {
    if (request.nextUrl.pathname.startsWith("/mainapp") || request.nextUrl.pathname.startsWith("/api/mainapp")) {
      return NextResponse.redirect(new URL('/subapp', request.url))
    }
  }
  if (request.nextUrl.pathname.startsWith("/subapp") || request.nextUrl.pathname.startsWith("/api/subapp")) {
    return NextResponse.redirect(new URL('/mainapp', request.url))
  }
  return NextResponse.next()
}

export const config = {
  matcher: [
    "/mainapp/:path*",
    "/app/mainapp/:path*",
    "/subapp/:path*",
    "/app/subapp/:path*"
  ]
}