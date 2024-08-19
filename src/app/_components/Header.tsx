import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import MaxWidthWrapper from "../_shared/MaxWidthContainer";
import { currentUser } from "@clerk/nextjs/server";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";

export default async function Header() {
  const user = await currentUser()
  console.log(user)

  return (
    <header className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-20 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="w-full h-full flex gap-2 items-center justify-between">
          <div>
            <Link href="/" className="text-2xl font-bold">Artist Station</Link>
          </div>
          <div className="flex-grow items-center justify-center gap-4 hidden lg:flex">
            <Link href="/discover" className="text-lg font-semibold tracking-widest hover:border-b-2 border-red-400 transition-all ease-in-out duration-150">Discover</Link>
            <Link href="/profile" className="text-lg font-semibold tracking-widest hover:border-b-2 border-red-400 transition-all ease-in-out duration-150">Profile</Link>
          </div>
          <div>
            <SignedIn>
              <div className="h-full flex gap-2 items-center relative">
                <Link href={`/profile/${user?.publicMetadata.userId as string}`} className="capitalize text-lg font-medium hidden lg:block cursor-pointer">{user?.username}</Link>
                <UserButton />
                <MobileNavbar />
              </div>
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}
