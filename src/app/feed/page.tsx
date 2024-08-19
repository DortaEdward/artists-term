import { GetUserById } from "@/server/user.query"
import { currentUser } from "@clerk/nextjs/server"
import MaxWidthWrapper from "../_shared/MaxWidthContainer"
import GridView from "./_components/GridView"

export default async function Feed() {
  const clerkUser = await currentUser()
  const user = await GetUserById(clerkUser?.publicMetadata.userId as string)

  const posts = [
    {
      title: "Chun-li fan art",
      imageUrl: "https://pbs.twimg.com/media/GVVaLE2bsAAljes?format=jpg&name=large",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Blanc being serious",
      imageUrl: "https://pbs.twimg.com/media/GUsb11FbMAAbhVe?format=jpg&name=medium",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Practicing Bird eye perspective for my upcoming game",
      imageUrl: "https://pbs.twimg.com/media/GVQVEl8aMAAdpGq?format=jpg&name=large",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Water color fun",
      imageUrl: "https://pbs.twimg.com/media/GVWNe-oaQAAbLwu?format=jpg&name=large",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Water color fun",
      imageUrl: "https://pbs.twimg.com/media/GUeQZdGbUAEM-aT?format=jpg&name=large",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Water color fun",
      imageUrl: "https://pbs.twimg.com/media/GVW7FxWXEAoy0Ie?format=jpg&name=900x900",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
    {
      title: "Water color fun",
      imageUrl: "https://pbs.twimg.com/media/GVPycOda8AAP0iD?format=jpg&name=4096x4096",
      author: {
        name: "DisgustingTokki",
        imageUrl: "https://pbs.twimg.com/profile_images/1802982818450178048/3qLtPhDm_400x400.jpg"
      }
    },
  ]

  return (
    <MaxWidthWrapper>
      <div className="w-full flex items-center justify-center py-6">
        <p className="text-3xl font-medium">Feed</p>
      </div>

      {/* Feed Grid */}
      <GridView posts={posts} />
      <div className="my-6"></div>
    </MaxWidthWrapper>

  )

}
