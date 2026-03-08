import { notFound } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { getAllPostSlugs, getPostData } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

export async function generateStaticParams() {
  const posts = getAllPostSlugs()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params

  try {
    const post = await getPostData(slug)

    return {
      title: `${post.title} | Mins Hospital`,
      description: post.excerpt || "Read this article from Mins Hospital.",
    }
  } catch {
    return {
      title: "Blog | Mins Hospital",
    }
  }
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params

  let post

  try {
    post = await getPostData(slug)
  } catch {
    notFound()
  }

  return (
    <>
      <SiteHeader />

      <section className="px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {post.category ? (
            <Badge variant="secondary" className="mb-4">
              {post.category}
            </Badge>
          ) : null}

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            {post.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>{post.date}</span>
          </div>

          {post.excerpt ? (
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {post.excerpt}
            </p>
          ) : null}

          <article
            className="prose prose-gray mt-10 max-w-none dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      <SiteFooter />
    </>
  )
}