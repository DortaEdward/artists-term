"use server"

import { HandleError } from "@/lib/utils";
import { db } from "@/server/db";
import { utapi } from "@/server/uploadthing";
import { revalidatePath } from "next/cache";



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



export async function DeletePost({id,imageKey}:{id:number,imageKey:string}) {
  
  try {
    const {success, deletedCount} = await utapi.deleteFiles(imageKey)
    if(success){
      await db.post.delete({
        where:{
          id:id
        }
      })
    }
    revalidatePath("/feed")
  } catch (error) {
    HandleError(error)
  }
}
