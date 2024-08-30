import Card from '@/app/blogs/card';
import SideBar from '@/components/sideBar/sideBar'
import clientPromise from '@/lib/mongodb';
import Image from 'next/image';
import React, { Fragment } from 'react'

export default async function Profile() {

    const client = await clientPromise;
    const db = client.db();
    const posts = await db.collection("MyPosts").find().toArray();
    console.log("connected");

    return (
        <h1>profile</h1>
    )
}
