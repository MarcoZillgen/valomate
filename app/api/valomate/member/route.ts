// api/valomate/member

import { MongoClient } from 'mongodb'

// get all members from mongoDB
export const GET = async (req: Request, res: Response) => {
  // connect to mongoDB
  const uri = MONGO_DB_URI
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const database = client.db('ValoMate')
    const collection = database.collection('Users')
    // get all
    const users = await collection.find().toArray()
    return new Response(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  } finally {
    await client.close()
  }
}

// add new member
export const POST = async (req: Request, res: Response) => {
  // connect to mongoDB
  const uri = MONGO_DB_URI
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const database = client.db('ValoMate')
    const collection = database.collection('Users')
    // insert the user by body
    const user = await collection.insertOne(await req.json())
    return new Response(JSON.stringify(user), { status: 200 })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  } finally {
    await client.close()
  }
}
