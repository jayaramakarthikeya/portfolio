import { ViewCounterSkeleton, Views } from "@/components/view-counter"
import { Posts } from "./posts"
import { type MDXFileData } from "@/lib/blog"
import { Suspense } from "react"

export function PostsList({ posts }: { posts: MDXFileData[] }) {
  const postsWithViews = posts.map((post) => ({
    post,
    viewsComponent: (
      <div></div>
    ),
  }))

  return <Posts postsWithViews={postsWithViews} />
}
