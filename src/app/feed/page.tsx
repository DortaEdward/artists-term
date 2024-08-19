import { GetUserById } from "@/server/user.query"
import { currentUser } from "@clerk/nextjs/server"
import MaxWidthWrapper from "../_shared/MaxWidthContainer"

export default async function Feed() {
  const clerkUser = await currentUser()
  const user = await GetUserById(clerkUser?.publicMetadata.userId as string)

  return (
    <MaxWidthWrapper>
      <div>
        <p>Feed</p>
        {
          user &&
          JSON.stringify(user)
        }
      </div>
    </MaxWidthWrapper>

  )

}
