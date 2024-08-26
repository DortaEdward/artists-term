import type { Prisma } from "@prisma/client";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import PostCard from "./PostCard";
// import Image from "next/image";

type PostWithUser = Prisma.PostGetPayload<{
  include: {
    user: true;
  };
}>;

export default function GridView({
  posts,
  userId,
}: {
  posts: PostWithUser[];
  userId: string;
}) {
  const user = true;
  return (
    <div className="2xl:grid-col-4 grid place-items-center items-center justify-center gap-4 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} userId={userId} />;
      })}
    </div>
  );
}

/*

*/
