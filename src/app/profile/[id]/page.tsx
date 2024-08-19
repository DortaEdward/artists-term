
import MaxWidthWrapper from "@/app/_shared/MaxWidthContainer";
import { GetUserById } from "@/server/user.query";
import { currentUser } from "@clerk/nextjs/server"
import { redirect } from "next/navigation";


export default async function ProfilePage({ params }: { params: { id: string } }) {

  const { id } = params;
  // get ProfilePage
  const user = await GetUserById(id)

  //const user = await currentUser()

  return (
    <MaxWidthWrapper>
      <div>
        <p>{user ? `user: ${user.id}` : "none"}</p>
        <p>Description:</p>
      </div>
    </MaxWidthWrapper>

  )
}
