import { MongoClient } from 'mongodb';

export const GET = async (req: Request, res: Response) => {
    const username = req.url.split("/")[6];
    const tag = req.url.split("/")[7];

    const uri = "mongodb+srv://marcosimonzillgen:jB3Ij6e73qAMiKvP@cluster.kkbv0qr.mongodb.net";

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("ValoMate");
        const collection = database.collection("User");
        const user = await collection.findOne({ username: username, tag: tag });
        if (user)
            return new Response(JSON.stringify(user), { status: 200 });
        else
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404, });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), { status: 500 });
    } finally {
        await client.close();
    }
};
