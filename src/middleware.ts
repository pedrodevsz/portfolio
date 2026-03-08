import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
    const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")

    if (!isAdminRoute) return NextResponse.next()

    const auth = request.cookies.get("auth")

    if (!auth) {
        return NextResponse.redirect(new URL("/admin/login", request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/admin/:path*"]
}