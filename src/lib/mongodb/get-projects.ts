import { Project } from "@/components/homepage/types"
import clientPromise from "@/lib/mongodb/mongodb"

export async function getProjects(): Promise<Project[]> {

    try {

        const client = await clientPromise
        const db = client.db("portfolio")

        const projects = await db
            .collection("projects")
            .find({})
            .sort({ createdAt: -1 })
            .toArray()

        return projects.map((p: any) => ({
            ...p,
            _id: p._id?.toString(),
            createdAt: p.createdAt
                ? new Date(p.createdAt).toISOString()
                : undefined
        }))

    } catch (error) {
        console.error("Erro ao buscar projetos:", error)
        return []
    }
}