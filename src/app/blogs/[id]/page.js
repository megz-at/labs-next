import React from 'react'
import Card from '../card';
import clientPromise from '@/lib/mongodb';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';


export default async function page({ params }) {

    // GET Posts from dummyjson API
    // const getPostById = await fetch(`https://dummyjson.com/posts/${params.id}`);
    // const post = await getPostById.json();


    // GET Posts from MongoDb
    const client = await clientPromise;
    const db = client.db();
    const post = await db.collection("posts").findOne({ id: Number(params.id) })
    console.log("post: ", post)

    // Create my own API ang get Posts

    // const getPosts = await fetch(`http://localhost:3000/API/allPosts?id=${params.id}`);
    // const post = await getPosts.json();

    if (post.length == 0) {
        notFound();
    }


    return (
        <div className='d-flex flex-column justify-content-center'>
            <div className='container d-flex justify-content-center pt-4' style={{"width":"50%"}}>
                <Card key={post.id} img={post.img} title={post.title} body={post.body} tags={post.tags} reactions={post.reactions} views={post.views} cols={"col-12"} />
            </div>

            <div className='d-flex justify-content-evenly mt-4'>
                <button className='btn btn-primary px-5 py-2 text-capitalize'><Link href={`/blogs/${post.id - 1}`} className={`btn btn-primary ${post.id == 1 && "disabled"}`}>prev</Link></button>
                <button className='btn btn-primary px-5 py-2 text-capitalize'><Link href={`/blogs/${post.id + 1}`} className={`btn btn-primary ${post.id == 30 && "disabled"}`}>next</Link></button>
            </div>
        </div>

    )
}
