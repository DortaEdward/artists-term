"use server"

import { HandleError } from "@/lib/utils"
import { db } from "@/server/db"
// import { Post } from "@prisma/client"

export async function CreatePost({payload}:{payload:{
  userId: string,
  description:string,
  imageUrl:string,
}}){
  try {
    const post = await db.post.create({
      data:{
        userId:payload.userId,
        images:[payload.imageUrl],
        description:payload.description
      }
    })
  } catch (error) {
    HandleError(error)
  }
}