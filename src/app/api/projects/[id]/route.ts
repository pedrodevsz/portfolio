import { NextResponse } from "next/server"
import { ObjectId } from "mongodb"
import clientPromise from "@/lib/mongodb/mongodb"

export const runtime = "nodejs"

export async function DELETE(
    req: Request,
    context: { params: Promise<{ id: string }> }
) {

    const { id } = await context.params

    try {
        const client = await clientPromise
        const db = client.db("portfolio")

        await db.collection("projects").deleteOne({
            _id: new ObjectId(id)
        })

        return NextResponse.json({ success: true })

    } catch (error) {

        console.error("DELETE PROJECT ERROR:", error)

        return NextResponse.json(
            { error: "Erro ao deletar projeto" },
            { status: 500 }
        )
    }
}