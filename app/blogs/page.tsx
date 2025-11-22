import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { news } from "@/lib/data"

export default function BlogsPage() {
  // Reusing news items as blog posts for now, typically this would be separate data
  const blogPosts = news.map((item) => ({
    ...item,
    excerpt: item.description,
    readTime: "5 min read",
  }))

  return (
    <div className="container mx-auto space-y-12 px-4 py-12 sm:px-6 lg:px-8">

      <div className="grid gap-8 md:grid-cols-2">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col border-2 border-primary p-6 transition-colors hover:bg-accent/10"
          >
            <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
              <span className="font-mono">{post.date}</span>
              <span className="font-mono">{post.readTime}</span>
            </div>

            <h2 className="mb-4 text-2xl font-bold leading-tight group-hover:underline">
              <Link href={post.blogLink}>{post.title}</Link>
            </h2>

            <p className="mb-6 flex-1 text-lg text-muted-foreground">{post.excerpt}</p>

            <div className="mt-auto">
              <Link
                href={post.blogLink}
                className="inline-flex items-center text-sm font-bold uppercase tracking-wide text-primary hover:underline"
              >
                Read Article <ArrowUpRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
