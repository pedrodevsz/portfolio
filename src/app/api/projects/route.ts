import clientPromise from "@/lib/mongodb/mongodb"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
    try {
        const body = await req.json()

        const client = await clientPromise
        const db = client.db("portfolio")

        const result = await db.collection("projects").insertOne({
            ...body,
            createdAt: new Date()
        })

        return NextResponse.json({
            success: true,
            id: result.insertedId.toString()
        })

    } catch (error) {
        console.error("CREATE PROJECT ERROR:", error)

        return NextResponse.json(
            { error: "Erro ao salvar projeto" },
            { status: 500 }
        )
    }
}

export async function GET() {
    try {
        const client = await clientPromise
        const db = client.db("portfolio")

        const projects = await db
            .collection("projects")
            .find({})
            .sort({ createdAt: -1 })
            .toArray()

        return NextResponse.json(projects)

    } catch (error) {
        console.error("GET PROJECTS ERROR:", error)

        return NextResponse.json(
            { error: "Erro ao buscar projetos" },
            { status: 500 }
        )
    }
}