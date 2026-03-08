// components/blog/BlogGrid.jsx
import BlogCard from "@/components/blog/BlogCard"

export default function BlogGrid({ posts }) {
  if (!posts?.length) {
    return (
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-2xl border bg-background p-8 text-center">
          <h2 className="text-xl font-semibold">No blog posts yet</h2>
          <p className="mt-2 text-muted-foreground">
            Add a markdown file inside <code>content/blog</code> to publish your
            first blog.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  )
}