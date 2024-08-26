"use client";

import { DeletePost } from "@/lib/actions/post.actions";
import { useUploadThing } from "@/utils/uploadthing";
import type { Prisma } from "@prisma/client";
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";


type PostWithUser = Prisma.PostGetPayload<{
  include: {
    user: true;
  };
}>;

export default function PostCard({
  post,
  userId,
}: {
  post: PostWithUser;
  userId: string;
}) {
  
  const [expand, setExpand] = useState(false);
  
  return (
    <div
      key={post.id}
      className="relative h-96 w-96 cursor-pointer overflow-hidden rounded-md border border-white shadow-lg md:h-[19rem] md:w-[19rem] lg:h-[18rem] lg:w-[18rem] xl:h-[20rem] xl:w-[20rem]"
    >
      <div>
        {userId == post.userId ? (
          <div className="absolute right-2 top-2 rounded bg-white/85">
            {expand ? (
              <>
              <MdExpandLess
                onClick={() => setExpand((prev) => !prev)}
                size={24}
              />
            <form action={async () => {
              await DeletePost(post.images[0]!)
              }}>
              <button>Delete This</button>
            </form>
              </>
            ) : (
              <MdExpandMore
                onClick={() => setExpand((prev) => !prev)}
                size={24}
              />
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
      <img
        src={post.images[0]}
        className="h-full w-full object-cover"
        alt={`Displaying image ${post.images[0]}`}
      />
      <div className="absolute bottom-0 left-0 flex h-24 w-full flex-col justify-between gap-2 bg-black/65 p-3">
        <div className="w-full">
          <p className="truncate text-lg text-white">{post.description}</p>
        </div>
        <div className="flex items-center gap-2">
          <img
            src={post.user.profileImage ? post.user.profileImage : ""}
            className="h-8 w-8 rounded-full"
            alt=""
          />
          <p className="font-bold text-white">{post.user.username}</p>
        </div>
      </div>
    </div>
  );
}
