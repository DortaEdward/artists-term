import { GetUserById } from "@/server/user.query"
import { currentUser } from "@clerk/nextjs/server"
import MaxWidthWrapper from "../_shared/MaxWidthContainer"
import GridView from "./_components/GridView"
import { GetUsersPosts } from "@/server/post.query"
import { redirect } from "next/navigation"


export default async function Feed() {
  const clerkUser = await currentUser()
  const user = await GetUserById(clerkUser?.publicMetadata.userId as string)

  if(!user){
    redirect("/")
  }

  const posts = await GetUsersPosts(user?.id);
  

  return (
    <MaxWidthWrapper>
      <div className="w-full flex items-center justify-center py-6">
        <p className="text-3xl font-medium">Feed</p>
      </div>

      {/* Feed Grid */}
      <GridView posts={posts} userId={user.id} />
      <div className="my-6"></div>
    </MaxWidthWrapper>

  )

}
