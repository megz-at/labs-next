import React from 'react'
import Card from './card';
import SideBar from '../../components/sideBar/sideBar';
import clientPromise from '@/lib/mongodb';



export default async function BlogPage() {

    // GET Posts from dummyjson API

    // const getPosts = await fetch("https://dummyjson.com/posts");
    // const posts = await getPosts.json();
    // await new Promise((resolve) => setTimeout(resolve, 4000));


    // GET Posts from MongoDb

    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("posts").find().toArray();
    console.log("connected");


    // Create my own API ang get Posts
    // const getPosts = await fetch("http://localhost:3000/API/allPosts");
    // const posts = await getPosts.json();


    return (
        <div className='container py-3' >

            <div className='row justify-content-between'>
                <div className='col-3'>
                    <SideBar />
                </div>

                <div className='col-9 row gap-2 justify-content-between align-items-start'>
                    {
                        posts.map((post) =>
                            <Card key={post.id} img={post.img} title={post.title} body={post.body} tags={post.tags} id={post.id} reactions={post.reactions} views={post.views} cols={"col-3"} />
                        )
                    }

                </div>
            </div>
        </div>
    )
}
