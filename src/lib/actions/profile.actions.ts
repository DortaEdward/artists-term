"use server"

import { db } from "@/server/db";
import type { User, Profile } from "@prisma/client";
import { revalidatePath } from "next/cache";

export async function CreateProfile(userId: string) {
  try {
    const createdProfile = await db.profile.create({
      data: {
        description: "",
        userId: userId
      }
    })
    return createdProfile
  } catch (error) {
    console.error(error)
    throw new Error(typeof error === "string" ? error : JSON.stringify(error))
  }
}
