"use server"

import { currentUser } from "@clerk/nextjs/server"
import prisma from "./lib/prisma"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function createNewBlogPost(formData: FormData) {

    const title = formData.get("title")
    const content = formData.get("content")

    const user = await currentUser()
    if (!title || !content || !user)
        return

    await prisma.blogPost.create({
        data: {
            title: title as string, content: content as string, authorId: user?.id as string, authorName: user?.fullName as string, authorProfilePic: user?.imageUrl as string
        }
    })

    return redirect("/blog")

}

export async function deletePost(formData: FormData) {
    const postId = formData.get("postId")
    if (typeof postId === "string")
        await prisma.blogPost.deleteMany({ where: { id: postId } })

    revalidatePath("/blog")
    revalidatePath("/dashboard")
}