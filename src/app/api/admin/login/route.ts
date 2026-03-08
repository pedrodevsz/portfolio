import { NextResponse } from "next/server"

const ADMIN_CODE = process.env.ADMIN_CODE || "333878"

export async function POST(req: Request) {
    const { code } = await req.json()

    if (code !== ADMIN_CODE) {
        return NextResponse.json({ error: "Código inválido" }, { status: 401 })
    }

    const response = NextResponse.json({ success: true })

    response.cookies.set("admin_auth", "true", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 8
    })

    return response
}