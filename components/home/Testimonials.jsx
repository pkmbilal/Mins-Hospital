// components/home/Testimonials.jsx
"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TESTIMONIALS } from "@/lib/siteData"

export default function Testimonials() {
  const items = useMemo(() => TESTIMONIALS, [])
  const [i, setI] = useState(0)
  const current = items[i]

  function prev() {
    setI((x) => (x - 1 + items.length) % items.length)
  }
  function next() {
    setI((x) => (x + 1) % items.length)
  }

  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">What patients say</h2>
            <p className="mt-2 text-muted-foreground">Real feedback from families we’ve supported 💛</p>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button variant="outline" size="icon" onClick={prev} aria-label="Previous">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={next} aria-label="Next">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {/* Featured card */}
          <Card className="rounded-2xl md:col-span-2">
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Quote className="h-5 w-5" />
                  <span className="text-sm">{current.service}</span>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                  <Star className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-4 text-base leading-relaxed">“{current.quote}”</p>

              <div className="mt-6 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{current.name}</span>
                {current.city ? ` • ${current.city}` : ""}
              </div>

              <div className="mt-6 flex gap-2 md:hidden">
                <Button variant="outline" className="w-full" onClick={prev}>
                  <ChevronLeft className="mr-2 h-4 w-4" />
                  Prev
                </Button>
                <Button variant="outline" className="w-full" onClick={next}>
                  Next
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* CTA card */}
          <Card className="rounded-2xl">
            <CardContent className="p-6">
              <div className="text-lg font-semibold">Ready to book?</div>
              <div className="mt-2 text-sm text-muted-foreground">
                Get a nurse/doctor at home with quick scheduling.
              </div>
              <div className="mt-5 grid gap-2">
                <Button asChild className="w-full">
                  <Link href="/book">Book Now</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/reviews">View more reviews</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}