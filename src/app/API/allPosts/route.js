import clientPromise from "@/lib/mongodb";
import { redirect } from "next/dist/server/api-utils";


export async function GET(request) {

    let posts;
    const id = request.nextUrl.searchParams.get("id");
    const client = await clientPromise;
    const db = client.db();


    if (id) {
        posts = await db.collection("posts").find({ id: Number(id) }).toArray();
    } else {
        posts = await db.collection("posts").find({}).toArray();
    }

    return new Response(JSON.stringify(posts), { status: 200 });
}