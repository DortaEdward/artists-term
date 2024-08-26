import { db } from "./db";

export async function GetUsersPosts(userId:string){
  const posts = db.post.findMany({
    where:{
      userId:userId
    },
    include:{
      user:true
    }
  })
  return posts
}