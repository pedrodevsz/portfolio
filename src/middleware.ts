import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {

    const { pathname } = req.nextUrl
    const token = req.cookies.get("admin_auth")

    const protectedRoutes = [
        "/create-project",
        "/my-projects"
    ]

    const isProtected = protectedRoutes.some(route =>
        pathname.startsWith(route)
    )

    if (isProtected && !token) {
        return NextResponse.redirect(new URL("/login", req.url))
    }

    if (pathname === "/login" && token) {
        return NextResponse.redirect(new URL("/my-projects", req.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        "/create-project/:path*",
        "/my-projects/:path*",
        "/login"
    ]
}