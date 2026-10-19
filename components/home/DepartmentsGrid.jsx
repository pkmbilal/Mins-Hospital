"use client"

// components/home/ServicesGrid.jsx
import Link from "next/link"
import Image from "next/image"
import { useMemo, useRef, useState } from "react"
import { CalendarCheck } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DEPARTMENTS } from "@/lib/siteData"

function bookHref(title) {
  return `/book?department=${encodeURIComponent(title)}`
}

function slugify(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
}

export default function DepartmentsGrid() {
  const [active, setActive] = useState(0)
  const count = DEPARTMENTS.length

  const startXRef = useRef(null)
  const draggingRef = useRef(false)

  const activeDepartment = useMemo(() => DEPARTMENTS[active], [active])

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

  const Icon = activeDepartment?.icon
  const href =
    activeDepartment?.href || `/services/${slugify(activeDepartment?.title || "")}`

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Our Departments
          </h2>
          <p className="mt-2 text-muted-foreground">
            Explore our departments — expert care, modern facilities, trusted staff.
          </p>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-8 md:hidden">
        <div
          className="relative"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <Link href={href} className="group block">
            <Card
              className={[
                "relative overflow-hidden rounded-2xl border border-white/10 bg-background min-h-[320px]",
                "transition-all duration-300",
                "hover:shadow-xl hover:border-primary/30",
                "focus-within:ring-2 focus-within:ring-primary/20",
              ].join(" ")}
            >
              {/* Background image */}
              {activeDepartment?.image && (
                <div className="absolute inset-0">
                  <Image
                    src={activeDepartment.image}
                    alt={activeDepartment.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/55" />

              {/* Extra gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/45 to-black/20" />

              <CardContent className="relative z-10 p-6 h-full">
                <div className="flex h-full flex-col items-center justify-center text-center gap-4">
                  <div
                    className={[
                      "inline-flex items-center justify-center",
                      "rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm",
                      "transition-all duration-300",
                      "group-hover:bg-white/15",
                    ].join(" ")}
                  >
                    {Icon ? <Icon className="h-7 w-7 text-white" /> : null}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold leading-tight text-white">
                      {activeDepartment?.title}
                    </h3>

                    <p className="text-sm text-white/80 line-clamp-3">
                      {activeDepartment?.desc}
                    </p>
                  </div>

                  <div className="pt-2 text-xs text-white/70">
                    Swipe left or right
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <Button asChild size="lg" className="mt-3 w-full gap-2">
          <Link href={bookHref(activeDepartment?.title || "")}>
            <CalendarCheck className="h-4 w-4" />
            Book {activeDepartment?.title} Appointment
          </Link>
        </Button>
      </div>

      {/* Desktop */}
      <div className="mt-8 hidden md:grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {DEPARTMENTS.map((s) => {
          const Icon = s.icon
          const href = s.href || `/services/${slugify(s.title)}`

          return (
            <div key={s.title} className="relative">
            <Link href={href} className="group">
              <Card
                className={[
                  "relative h-[260px] overflow-hidden rounded-2xl border border-white/10 bg-background",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-xl hover:border-primary/30",
                  "focus-within:ring-2 focus-within:ring-primary/20",
                ].join(" ")}
              >
                {/* Background image */}
                {s.image && (
                  <div className="absolute inset-0">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20" />

                <CardContent className="relative z-10 flex h-full p-6">
                  <div className="mt-auto w-full">
                    <div
                      className={[
                        "mb-4 inline-flex rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-sm",
                        "transition-all duration-300",
                        "group-hover:bg-white/15",
                      ].join(" ")}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-base font-semibold text-white">
                        {s.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm text-white/80">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link
              href={bookHref(s.title)}
              aria-label={`Book ${s.title} appointment`}
              className="absolute right-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md transition hover:brightness-110"
            >
              <CalendarCheck className="h-3.5 w-3.5" />
              Book
            </Link>
            </div>
          )
        })}
      </div>
    </section>
  )
}