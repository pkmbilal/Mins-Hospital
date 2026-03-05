// components/home/WhyChooseUs.jsx
"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  ShieldCheck,
  Stethoscope,
  Clock,
  HeartPulse,
  Headset,
} from "lucide-react"
import { cn } from "@/lib/utils" // ✅ shadcn helper

const WHY_CARDS = [
  {
    icon: ShieldCheck,
    title: "Trusted Care",
    desc: "Experienced team, ethical practice, and clear communication at every step.",
  },
  {
    icon: Stethoscope,
    title: "Expert Doctors",
    desc: "Specialists across departments with evidence-based treatment plans.",
  },
  {
    icon: Clock,
    title: "Fast Appointments",
    desc: "Quick scheduling and minimal waiting with streamlined workflows.",
  },
  {
    icon: HeartPulse,
    title: "Modern Facilities",
    desc: "Clean, well-equipped rooms and reliable diagnostics for better outcomes.",
  },
  {
    icon: Headset,
    title: "Support & Follow-up",
    desc: "Friendly guidance before and after your visit — we stay in touch.",
  },
]

function useIsMobile(breakpoint = 640) {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => setIsMobile(mq.matches)
    onChange()
    mq.addEventListener?.("change", onChange)
    return () => mq.removeEventListener?.("change", onChange)
  }, [breakpoint])
  return isMobile
}

export default function WhyChooseUs({
  className,
  containerClassName,
}) {
  const isMobile = useIsMobile(640)
  const [active, setActive] = useState(0)

  const startXRef = useRef(null)
  const draggingRef = useRef(false)

  const count = WHY_CARDS.length
  const clampIndex = (i) => ((i % count) + count) % count
  const goPrev = () => setActive((v) => clampIndex(v - 1))
  const goNext = () => setActive((v) => clampIndex(v + 1))

  const activeCard = useMemo(() => WHY_CARDS[active], [active])

  function onTouchStart(e) {
    if (!isMobile) return
    draggingRef.current = true
    startXRef.current = e.touches[0].clientX
  }

  function onTouchEnd(e) {
    if (!isMobile || !draggingRef.current) return
    draggingRef.current = false

    const startX = startXRef.current
    const endX = e.changedTouches?.[0]?.clientX
    if (startX == null || endX == null) return

    const dx = endX - startX
    const threshold = 45
    if (dx > threshold) goPrev()
    else if (dx < -threshold) goNext()
  }

  return (
    <section className={cn("mx-auto max-w-6xl", className)}>
      <div className={cn("px-4", containerClassName)}>
        {/* Heading */}
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Why choose us
          </h2>
          <p className="mt-2 text-muted-foreground">
            Reliable care is about people + process — we focus on both
          </p>
        </div>

        {/* Desktop / Tablet grid */}
        <div className="mt-8 hidden gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {WHY_CARDS.map((c) => {
            const Icon = c.icon
            return (
              <Card
                key={c.title}
                className={[
                  "group rounded-2xl border bg-background cursor-pointer",
                  "transition-all duration-300",
                  "hover:-translate-y-1 hover:shadow-lg hover:shadow-black/5",
                  "hover:border-primary/30",
                ].join(" ")}
              >
                <CardContent className="p-5">
                  <div className="flex flex-col items-start gap-3">
                    <div
                      className={[
                        "grid h-12 w-12 place-items-center rounded-2xl border bg-muted/40",
                        "transition-all duration-300",
                        "group-hover:bg-primary/10 group-hover:border-primary/30",
                        "group-hover:scale-[1.03]",
                      ].join(" ")}
                    >
                      <Icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:rotate-[-6deg]" />
                    </div>

                    <div className="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
                      {c.title}
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {c.desc}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile swipe carousel */}
        <div className="mt-8 sm:hidden">
          <div
            className="mx-auto max-w-sm select-none"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <Card className="rounded-2xl border bg-background transition-all duration-300 active:scale-[0.98]">
              <CardContent className="p-6">
                <div className="flex flex-col items-center gap-3 text-center">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border bg-primary/10">
                    <activeCard.icon className="h-7 w-7 text-primary" />
                  </div>

                  <div className="text-base font-semibold leading-snug">
                    {activeCard.title}
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {activeCard.desc}
                  </p>

                  <div className="pt-2 text-xs text-muted-foreground">
                    Swipe right or left
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}