"use client"

type Posts = {
  title: string,
  imageUrl: string
  author: {
    name: string,
    imageUrl: string
  }
}

type Props = {
  posts: Posts[]
}

export default function GridView({ posts }: Props) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-col-4 gap-4 items-center justify-center place-items-center">
      {
        posts.map((post, idx) => {
          return (
            <div key={idx} className="w-96 h-96 md:w-[19rem] md:h-[19rem] lg:w-[18rem] lg:h-[18rem] xl:w-[20rem] xl:h-[20rem] border rounded-md overflow-hidden relative shadow-lg border-white cursor-pointer">
              <img src={post.imageUrl} className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 bg-black/65 h-24 w-full p-3 flex flex-col gap-2 justify-between">
                <div className="w-full">
                  <p className="text-white text-lg truncate">{post.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={post.author.imageUrl} className="w-8 h-8 rounded-full" />
                  <p className="text-white font-bold">{post.author.name}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
