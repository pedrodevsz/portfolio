import { Project } from "@/lib/types/project/types"
import clientPromise from "@/lib/mongodb/mongodb"

export async function getAllProjects(): Promise<Project[]> {
    try {
        const client = await clientPromise
        const db = client.db("portfolio")

        const projects = await db
            .collection("projects")
            .find({})
            .sort({ createdAt: -1 })
            .toArray()

        return projects.map((p: any): Project => ({
            _id: p._id.toString(),
            title: p.title ?? "",
            description: p.description ?? "",
            image: p.image ?? "",
            stack: p.stack ?? [],
            techHighlight: p.techHighlight ?? "",
            githubUrl: p.github ?? "",
            demoUrl: p.link ?? "",
            createdAt: p.createdAt
                ? new Date(p.createdAt).toISOString()
                : undefined
        }))

    } catch (error) {
        console.error("Erro ao buscar projetos:", error)
        return []
    }
}