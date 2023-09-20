// api/valomate/member/[username]/[tag]

import { MongoClient } from 'mongodb'

// get one member by username and tag
export const GET = async (req: Request, res: Response) => {
  // get data from url
  const username = req.url.split('/')[6]
  const tag = req.url.split('/')[7]

  // connect to mongoDB
  const uri = MONGO_DB_URI
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const database = client.db('ValoMate')
    const collection = database.collection('User')
    // find the user by username and tag
    const user = await collection.findOne({ username: username, tag: tag })
    if (user) return new Response(JSON.stringify(user), { status: 200 })
    // user not found error
    return new Response(JSON.stringify({ error: 'User not found' }), {
      status: 404
    })
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), { status: 500 })
  } finally {
    await client.close()
  }
}
