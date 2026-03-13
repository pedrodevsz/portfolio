import { ProjectAPI } from "@/lib/types/project/types"
import clientPromise from "@/lib/mongodb/mongodb"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
    try {
        const body: ProjectAPI = await req.json()

        if (!body?.title) {
            return NextResponse.json(
                { error: "O campo 'title' é obrigatório" },
                { status: 400 }
            )
        }

        const client = await clientPromise
        const db = client.db("portfolio")

        const project = {
            ...body,
            createdAt: new Date()
        }

        const result = await db.collection("projects").insertOne(project)

        return NextResponse.json({
            success: true,
            project: {
                _id: result.insertedId.toString(),
                ...project
            }
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

        const formattedProjects = projects.map((project) => ({
            ...project,
            _id: project._id.toString()
        }))

        return NextResponse.json(formattedProjects)

    } catch (error) {
        console.error("GET PROJECTS ERROR:", error)

        return NextResponse.json(
            { error: "Erro ao buscar projetos" },
            { status: 500 }
        )
    }
}