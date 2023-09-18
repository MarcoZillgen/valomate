// api/valomate/member

import { MongoClient } from 'mongodb';

export const GET = async (req: Request, res: Response) => {
    const uri = `mongodb+srv://marcosimonzillgen:${process.env.MONGO_DB_KEY}@cluster.kkbv0qr.mongodb.net`;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("ValoMate");
        const collection = database.collection("Users");
        // get all
        const users = await collection.find().toArray();
        console.log(users);

        return new Response(JSON.stringify(users), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
    finally {
        await client.close();
    }
};

export const POST = async (req: Request, res: Response) => {
    const uri = `mongodb+srv://marcosimonzillgen:${process.env.MONGO_DB_KEY}@cluster.kkbv0qr.mongodb.net`;
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("ValoMate");
        const collection = database.collection("Users");
        const user = await collection.insertOne(await req.json());
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    }
    finally {
        await client.close();
    }
}