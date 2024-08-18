
import MaxWidthWrapper from "@/app/_shared/MaxWidthContainer";
import { currentUser, auth } from "@clerk/nextjs/server"


export default async function ProfilePage({ params }: { params: { id: string } }) {

  const { id } = params;
  // get Profile
  const session = auth();

  return (
    <MaxWidthWrapper>
      <div>
        <p>{id}</p>
        <p>{session.userId}</p>
      </div>
    </MaxWidthWrapper>

  )
}
