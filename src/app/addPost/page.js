import React from 'react'
import { v2 as cloudinary } from "cloudinary";
import clientPromise from '@/lib/mongodb';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';


cloudinary.config({
    cloud_name: "ddoniqytm",
    api_key: "862491472187771",
    api_secret: "iC5qjVEjYALHKwWHEsPqtK98U5w",
});

export default function AddPost() {

    const create = async (formData) => {
        "use server";
        const title = formData.get("title");
        const description = formData.get("description");
        const imgFile = formData.get("image");

        const arrayBuffer = await imgFile.arrayBuffer();
        const buffer = new Uint8Array(arrayBuffer);

        const imageRes = await new Promise((resolve, reject) => {
            cloudinary.uploader
                .upload_stream(
                    { tags: ["nextjs-server-actions-upload-sneakers"] },
                    function (error, result) {
                        if (error) {
                            reject(error);
                            return;
                        }
                        resolve(result);
                    }
                )
                .end(buffer);
        });

        const client = await clientPromise;
        const db = client.db();
        await db
            .collection("MyPosts")
            .insertOne({ title, description, imageSrc: imageRes.url });

        revalidatePath("/profile");
        redirect("/profile");
    };

    return (
        <div style={{ height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <form className=' shadow p-4 rounded' style={{"width":"50%"}} action={create}>
                <div class="mb-3">
                    <label class="form-label" htmlFor='title'>Post title</label>
                    <input type="text" class="form-control" name='title' id="title" />
                </div>

                <div class="mb-3">
                    <label class="form-label" htmlFor='description'>Post Description</label>
                    <input type="text" class="form-control" name='description' id="description" />
                </div>

                <div class="input-group mb-3">
                    <label class="input-group-text" htmlFor="image">Upload Post Image</label>
                    <input type="file" class="form-control" name='image' id="image" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
