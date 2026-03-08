// components/blog/BlogHero.jsx
import { Badge } from "@/components/ui/badge"

export default function BlogHero() {
  return (
    <section className="border-b bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <Badge variant="secondary" className="mb-4">
          Health Blog
        </Badge>

        <div className="max-w-3xl">
          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Health tips, patient guidance, and hospital updates
          </h1>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            Explore useful articles from Mins Hospital covering wellness,
            preventive care, medical advice, and everyday health awareness.
          </p>
        </div>
      </div>
    </section>
  )
}