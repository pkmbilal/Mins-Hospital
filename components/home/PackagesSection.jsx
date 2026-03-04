// components/home/PackagesSection.jsx
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PACKAGES } from "@/lib/siteData"

export default function PackagesSection() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Packages & Care Programs</h2>
            <p className="mt-2 text-muted-foreground">Choose a plan or request a custom program.</p>
          </div>

          <Button asChild variant="outline" className="hidden md:inline-flex gap-2">
            <Link href="/packages">
              View Packages <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <Card key={p.title} className="rounded-2xl">
              <CardHeader>
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  {p.badge ? <Badge variant="secondary">{p.badge}</Badge> : null}
                </div>
                <div className="text-sm text-muted-foreground">{p.priceHint}</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {p.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-primary/60" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Button asChild className="w-full">
                  <Link href="/contact">Request pricing</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border bg-background p-5">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-primary/10 p-2">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <div className="font-medium">Custom plan available</div>
                <div className="text-sm text-muted-foreground">
                  Tell us your needs (duration, skills, equipment). We’ll build the right care team.
                </div>
              </div>
            </div>
            <Button asChild variant="outline">
              <Link href="/contact">Talk to coordinator</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}