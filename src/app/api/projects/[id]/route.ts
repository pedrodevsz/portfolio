import { NextResponse } from "next/server"
import clientPromise from "@/lib/mongodb/mongodb"
import { ObjectId } from "mongodb"

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const client = await clientPromise
    const db = client.db("portfolio")

    await db.collection("projects").deleteOne({
        _id: new ObjectId(params.id)
    })

    return NextResponse.json({ success: true })
}

