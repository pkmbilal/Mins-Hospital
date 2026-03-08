// components/blog/BlogCard.jsx
import Link from "next/link"
import { CalendarDays, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function BlogCard({ post }) {
  return (
    <Card className="h-full overflow-hidden border bg-background transition hover:shadow-md">
      <CardContent className="flex h-full flex-col p-6">
        {post.category ? (
          <Badge variant="secondary" className="mb-3 w-fit">
            {post.category}
          </Badge>
        ) : null}

        <h2 className="text-xl font-semibold leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h2>

        <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4" />
          <span>{post.date}</span>
        </div>

        {post.excerpt ? (
          <p className="mt-4 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {post.excerpt}
          </p>
        ) : null}

        <div className="mt-6 pt-2">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Read More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}