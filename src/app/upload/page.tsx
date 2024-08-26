import { auth } from "@clerk/nextjs/server";
import MaxWidthWrapper from "../_shared/MaxWidthContainer";
import UploadComponent from "./_components/UploadComponent";
import { redirect } from "next/navigation";

export default function UploadPage() {
  const session = auth()

  if (!session || !session.userId) {
    redirect("/feed")
  }

  return (
    <MaxWidthWrapper>
      <div className="w-full h-full flex items-center justify-center">
        <UploadComponent />
      </div>
    </MaxWidthWrapper>
  );
}
