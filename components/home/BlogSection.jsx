// components/home/BlogSection.jsx
import Link from "next/link"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BLOG_POSTS } from "@/lib/siteData"

export default function BlogSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pt-2 pb-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Health Tips</h2>
          <p className="mt-2 text-muted-foreground">Optional but powerful for SEO 🔥</p>
        </div>

        <Button asChild variant="outline" className="hidden md:inline-flex gap-2">
          <Link href="/blog">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {BLOG_POSTS.map((p) => (
          <Card key={p.href} className="rounded-2xl">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {p.date}
              </div>
              <div className="mt-2 font-semibold">{p.title}</div>
              <div className="mt-2 text-sm text-muted-foreground">{p.excerpt}</div>
              <Link href={p.href} className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline">
                Read more <ArrowRight className="h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 md:hidden">
        <Button asChild variant="outline" className="w-full gap-2">
          <Link href="/blog">
            View all articles <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}