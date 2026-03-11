import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!

if (!uri) {
    throw new Error("MONGODB_URI não definida")
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
    var _mongo: Promise<MongoClient> | undefined
}

if (!global._mongo) {

    client = new MongoClient(uri, {
        maxPoolSize: 10
    })

    global._mongo = client.connect()
}

clientPromise = global._mongo

export default clientPromise