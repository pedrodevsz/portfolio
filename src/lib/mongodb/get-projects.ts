import clientPromise from "@/lib/mongodb/mongodb"

export async function getProjects() {
    const client = await clientPromise
    const db = client.db("portfolio")

    const projects = await db
        .collection("projects")
        .find({})
        .sort({ createdAt: -1 })
        .toArray()

    return projects.map((p) => ({
        ...p,
        _id: p._id.toString()
    }))
}