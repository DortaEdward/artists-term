"use server"

import { db } from "@/server/db";
import type { User } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { HandleError } from "../utils";

export async function CreateUser(user: User) {
  try {
    const createdUser = await db.user.create({ data: user })
    return createdUser
  } catch (error) {
    HandleError(error)
  }
}

// update user
export async function UpdateUser(clerkId: string, user: User) {
  try {

  } catch (error) {

  }
}

export async function DeleteUser(clerkId: string) {
  try {
    const user = await db.user.findFirst({ where: { clerkId: clerkId } })
    if (!user) {
      throw new Error("No User Found")
    }
    const deletedUser = await db.user.delete(
      {
        where: {
          clerkId: clerkId
        }
      }
    )

    revalidatePath("/")
    return deletedUser
  } catch (error) {
    HandleError(error)
  }
}
