"use client"

import { useEffect, useMemo, useState } from "react"
import { cn } from "@/lib/utils"

function useCountUp(target = 0, durationMs = 2200, delayMs = 0) {
  const t = useMemo(() => Number(target ?? 0), [target])
  const [value, setValue] = useState(0)

  useEffect(() => {
    let raf = 0
    let timeout = 0

    const from = 0
    const to = t

    function start() {
      const startTime = performance.now()

      function tick(now) {
        const p = Math.min(1, (now - startTime) / durationMs)
        const eased = 1 - Math.pow(1 - p, 3) // easeOutCubic
        setValue(from + (to - from) * eased)
        if (p < 1) raf = requestAnimationFrame(tick)
      }

      raf = requestAnimationFrame(tick)
    }

    timeout = window.setTimeout(start, delayMs)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [t, durationMs, delayMs])

  return value
}

function compactNumber(n) {
  const num = Number(n ?? 0)
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(num % 1_000_000 === 0 ? 0 : 1)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(num % 1_000 === 0 ? 0 : 1)}k`
  return `${Math.round(num)}`
}

function Stat({ value, suffix = "+", label, delayMs = 0 }) {
  const animated = useCountUp(value, 2200, delayMs)
  const display = compactNumber(animated)

  return (
    <div className="group relative flex flex-col items-center justify-center px-3 py-5 text-center">
      {/* subtle hover sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-0 bg-white/5" />
      </div>

      <div className="relative flex items-baseline gap-1">
        <span className="text-3xl font-semibold tracking-tight sm:text-4xl tabular-nums text-white">
          {display}
        </span>
        <span className="text-base font-semibold text-white/90">{suffix}</span>
      </div>

      <div className="relative mt-1 text-xs sm:text-sm font-medium text-white/85">
        {label}
      </div>
    </div>
  )
}

export default function StatsBar({ items = defaultStats, className }) {
  return (
    <section className={cn("w-full", className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative overflow-hidden rounded-2xl bg-primary shadow-sm">
          {/* glow blobs */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-white/15 blur-3xl" />
          </div>

          {/* content */}
          <div className="relative grid grid-cols-2 sm:grid-cols-4">
            {items.map((it, idx) => (
              <div key={it.key} className="relative">
                <Stat
                  value={it.value}
                  suffix={it.suffix ?? "+"}
                  label={it.label}
                  delayMs={idx * 120}
                />

                {/* separators desktop */}
                {idx !== items.length - 1 ? (
                  <div className="pointer-events-none absolute right-0 top-1/2 hidden h-10 w-px -translate-y-1/2 bg-white/25 sm:block" />
                ) : null}

                {/* separators mobile (between 2 columns) */}
                {idx % 2 === 0 ? (
                  <div className="pointer-events-none absolute right-0 top-1/2 h-10 w-px -translate-y-1/2 bg-white/25 sm:hidden" />
                ) : null}

                {/* row separator mobile */}
                {idx < 2 ? (
                  <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-white/15 sm:hidden" />
                ) : null}
              </div>
            ))}
          </div>

          {/* subtle border */}
          <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/15" />
        </div>
      </div>
    </section>
  )
}

const defaultStats = [
  { key: "patients", value: 2000, suffix: "+", label: "Satisfied Patients" },
  { key: "doctors", value: 15, suffix: "+", label: "Professional Doctors" },
  { key: "nurses", value: 20, suffix: "+", label: "Expert Nurses" },
  { key: "experience", value: 10, suffix: "+", label: "Years of Experience" },
]