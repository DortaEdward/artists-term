"use server"

import { HandleError } from "@/lib/utils";
import { db } from "@/server/db";
import { utapi } from "@/server/uploadthing";



type CreatePostPayload = {
  userId: string,
  description: string,
  images: string[],
  imageKey: string
}

export async function CreatePostAction(payload: CreatePostPayload) {
  try {
    const user = await db.user.findFirst({
      where: {
        clerkId: payload.userId
      }
    })
    if (!user) return
    await db.post.create({
      data: {
        userId: user?.id,
        description: payload.description,
        images: payload.images,
        imageKey: payload.imageKey,
      }
    })
  } catch (error) {
    HandleError(error)
  }
}



export async function DeletePost(imageUrl: string) {
  
  try {
    const {success, deletedCount} = await utapi.deleteFiles(imageUrl)
    console.log("Success?:",success)
    console.log("deletedCount?:",deletedCount)
  } catch (error) {
    HandleError(error)
  }
}
