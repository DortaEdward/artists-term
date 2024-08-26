import { HandleError } from "@/lib/utils";
import { db } from "@/server/db";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";

type CreatePostPayload = {
  userId: string,
  description: string,
  images: string[],
  imageKey: string,
}

export async function POST(request: Request) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const res: CreatePostPayload = await request.json();
  try {
    const user = await db.user.findFirst({
      where: {
        clerkId: res.userId
      }
    })
    if (!user) {
      return NextResponse.json({
        message: "Unable to create post"
      })
    }
    const post = await db.post.create({
      data: {
        userId: user?.id,
        description: res.description,
        images: res.images,
        imageKey: res.imageKey
      }
    })
    // return redirect("/")
    return NextResponse.json({ msg: "Post Created", post: post })
  } catch (error) {
    HandleError(error)
    return NextResponse.json({
      message: "Unable to create post"
    })
  }
}