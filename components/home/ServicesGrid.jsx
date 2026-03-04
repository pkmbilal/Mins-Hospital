"use client"

// components/home/ServicesGrid.jsx
import Link from "next/link"
import { useEffect, useMemo, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SERVICES } from "@/lib/siteData"

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export default function ServicesGrid() {
  const [active, setActive] = useState(0)
  const count = SERVICES.length

  const startXRef = useRef(null)
  const draggingRef = useRef(false)

  const activeService = useMemo(() => SERVICES[active], [active])

  function clampIndex(i) {
    if (!count) return 0
    return ((i % count) + count) % count
  }

  function goPrev() {
    setActive((v) => clampIndex(v - 1))
  }

  function goNext() {
    setActive((v) => clampIndex(v + 1))
  }

  // Touch swipe (mobile)
  function onTouchStart(e) {
    startXRef.current = e.touches?.[0]?.clientX ?? null
    draggingRef.current = true
  }

  function onTouchEnd(e) {
    if (!draggingRef.current) return
    const endX = e.changedTouches?.[0]?.clientX ?? null
    const startX = startXRef.current
    draggingRef.current = false
    startXRef.current = null

    if (startX == null || endX == null) return
    const dx = endX - startX
    const threshold = 40

    if (dx > threshold) goPrev()
    else if (dx < -threshold) goNext()
  }

  const Icon = activeService?.icon
  const href =
    activeService?.href || `/services/${slugify(activeService?.title || "")}`

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Our Services
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our departments — expert care, modern facilities, trusted staff.
          </p>
        </div>

        <Button asChild variant="outline" className="hidden md:inline-flex gap-2">
          <Link href="/services">All Services</Link>
        </Button>
      </div>

      {/* ---------------- Mobile: single centered card carousel ---------------- */}
      <div className="mt-8 md:hidden">
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <Link href={href} className="group block">
            <Card
              className={[
                "relative overflow-hidden rounded-2xl border bg-background",
                "transition-all duration-300",
                "hover:shadow-xl hover:border-primary/30",
                "focus-within:ring-2 focus-within:ring-primary/20",
              ].join(" ")}
            >
              {/* Soft gradient glow */}
              <div
                className={[
                  "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                  "group-hover:opacity-100",
                  "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(99,102,241,0.14),transparent_45%),",
                  "radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.12),transparent_40%)]",
                ].join("")}
              />

              <CardContent className="relative p-6">
                {/* Centered content */}
                <div className="flex flex-col items-center text-center gap-4">
                  {/* Icon badge */}
                  <div
                    className={[
                      "inline-flex items-center justify-center",
                      "rounded-2xl border bg-primary/5 p-4",
                      "transition-all duration-300",
                      "group-hover:bg-primary/10 group-hover:border-primary/20",
                    ].join(" ")}
                  >
                    {Icon ? <Icon className="h-7 w-7 text-primary" /> : null}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight">
                      {activeService?.title}
                    </h3>

                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {activeService?.desc}
                    </p>
                  </div>

                  {/* Bottom hint */}
                  <div className="pt-2 text-xs text-muted-foreground">
                    Swipe left or right
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* <div className="mt-6">
          <Button asChild variant="outline" className="w-full">
            <Link href="/services">All Services</Link>
          </Button>
        </div> */}
      </div>

      {/* ---------------- Desktop: keep your grid ---------------- */}
      <div className="mt-8 hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {SERVICES.map((s) => {
          const Icon = s.icon
          const href = s.href || `/services/${slugify(s.title)}`

          return (
            <Link key={s.title} href={href} className="group">
              <Card
                className={[
                  "relative h-full overflow-hidden rounded-2xl border bg-background",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl",
                  "hover:border-primary/30",
                  "focus-within:ring-2 focus-within:ring-primary/20",
                ].join(" ")}
              >
                <div
                  className={[
                    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300",
                    "group-hover:opacity-100",
                    "bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(99,102,241,0.14),transparent_45%),",
                    "radial-gradient(900px_circle_at_80%_20%,rgba(16,185,129,0.12),transparent_40%)]",
                  ].join("")}
                />

                <CardContent className="relative p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={[
                        "rounded-2xl border bg-primary/5 p-3",
                        "transition-all duration-300",
                        "group-hover:bg-primary/10 group-hover:border-primary/20",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold">{s.title}</h3>
                      <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </section>
  )
}