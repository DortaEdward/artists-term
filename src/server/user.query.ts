import { HandleError } from "@/lib/utils";
import { db } from "@/server/db";

export async function GetUserById(id: string) {
  try {
    const user = await db.user.findUnique({
      where: {
        id: id
      }
    })
    return user;
  } catch (error) {
    HandleError(error)
  }
}
