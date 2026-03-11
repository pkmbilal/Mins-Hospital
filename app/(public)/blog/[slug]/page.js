import { notFound } from "next/navigation"
import { CalendarDays } from "lucide-react"
import { getAllPostSlugs, getPostData } from "@/lib/blog"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

const siteUrl = "https://minshospital.com"

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
    const postUrl = `${siteUrl}/blog/${slug}`
    const ogImage = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.jpg`

    return {
      title: post.title,
      description: post.excerpt || "Read this article from Mins Hospital.",
      alternates: {
        canonical: `/blog/${slug}`,
      },
      openGraph: {
        title: post.title,
        description: post.excerpt || "Read this article from Mins Hospital.",
        url: postUrl,
        siteName: "Mins Hospital",
        type: "article",
        publishedTime: post.date || undefined,
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.excerpt || "Read this article from Mins Hospital.",
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
      },
    }
  } catch {
    return {
      title: "Blog",
      description: "Read health tips, wellness guidance, and hospital updates from Mins Hospital.",
      alternates: {
        canonical: "/blog",
      },
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

  const postUrl = `${siteUrl}/blog/${slug}`
  const ogImage = post.image ? `${siteUrl}${post.image}` : `${siteUrl}/og-image.jpg`

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || "Read this article from Mins Hospital.",
    image: [ogImage],
    url: postUrl,
    datePublished: post.date || undefined,
    author: {
      "@type": "Organization",
      name: "Mins Hospital",
    },
    publisher: {
      "@type": "Organization",
      name: "Mins Hospital",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    articleSection: post.category || "Health Blog",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />

      <main>
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
              <time dateTime={post.date}>{post.date}</time>
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
      </main>

      <SiteFooter />
    </>
  )
}