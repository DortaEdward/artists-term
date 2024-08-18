import { SignInButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import MaxWidthWrapper from "../_shared/MaxWidthContainer";

export default function HomePage() {

  /*
  const session = auth()
  if (session.userId) {
    redirect("/feed")
  }
  */

  return (
    <main className="flex flex-col flex-grow items-center justify-center gap-6">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-6xl font-bold text-center">Instagram but for Artists</h1>
          <p className="text-2xl text-gray-500 max-w-lg text-center">A new art posting platform for the people looking of a more simple and homey vibe.</p>
        </div>
        <div className="flex items-center justify-center mt-4">
          <SignInButton>
            <p className="text-2xl font-medium border py-1 px-6 rounded-md bg-red-400 text-white text-center w-48">Join Now</p>
          </SignInButton>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
