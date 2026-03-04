"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { Megaphone, X, ChevronLeft, ChevronRight } from "lucide-react"

export default function OffersSection() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  const [isMobile, setIsMobile] = useState(false)

  // Desktop pagination (8 at a time)
  const PAGE_SIZE = 8
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  // ---- Swipe handling (mobile) ----
  const startXRef = useRef(null)
  const draggingRef = useRef(false)

  const count = images.length
  const activeImg = useMemo(() => images?.[active]?.url, [images, active])

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

  function onStart(clientX) {
    startXRef.current = clientX
    draggingRef.current = true
  }

  function onEnd(clientX) {
    if (!draggingRef.current) return
    draggingRef.current = false

    const startX = startXRef.current
    startXRef.current = null
    if (startX == null) return

    const dx = clientX - startX
    const threshold = 40

    if (dx > threshold) goPrev()
    else if (dx < -threshold) goNext()
  }

  // Determine mobile (reactive)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  function handleOpen(idx) {
    setActive(idx)
    if (!isMobile) setOpen(true) // desktop only
  }

  function handleClose() {
    setOpen(false)
  }

  // Fetch images from server
  useEffect(() => {
    let alive = true

    async function load() {
      try {
        setLoading(true)
        const res = await fetch("/api/offers", { cache: "no-store" })
        const json = await res.json()
        if (!alive) return
        const list = Array.isArray(json?.images) ? json.images : []
        setImages(list)
        setVisibleCount(PAGE_SIZE) // reset pagination on refresh
      } catch {
        if (!alive) return
        setImages([])
        setVisibleCount(PAGE_SIZE)
      } finally {
        if (!alive) return
        setLoading(false)
      }
    }

    load()
    return () => {
      alive = false
    }
  }, [])

  // Keep active index safe if images change
  useEffect(() => {
    if (active > count - 1) setActive(0)
  }, [count, active])

  // Desktop lightbox: ESC + arrows + prevent background scroll
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowLeft") goPrev()
      if (e.key === "ArrowRight") goNext()
    }

    if (open) {
      window.addEventListener("keydown", onKeyDown)
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown)
      document.body.style.overflow = ""
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, count])

  const hasImages = count > 0
  const desktopVisible = images.slice(0, Math.min(visibleCount, count))
  const canLoadMore = visibleCount < count

  function handleLoadMore() {
    setVisibleCount((v) => Math.min(v + PAGE_SIZE, count))
  }

  if (loading) {
    return (
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
            <Megaphone className="h-4 w-4" />
            Latest updates
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/5] w-full animate-pulse rounded-2xl border bg-background"
              />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (!hasImages) {
    return (
      <section className="border-y bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
            <Megaphone className="h-4 w-4" />
            Latest updates
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            Offers & Announcements
          </h2>
          <p className="mt-2 text-muted-foreground">
            No offer posters found in <code>/public/images/home/offers</code>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        {/* Title */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
              <Megaphone className="h-4 w-4" />
              Latest updates
            </div>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              Offers & Announcements
            </h2>
            <p className="mt-2 text-muted-foreground">
              <span className="hidden md:inline">
                Click any poster to view it in full size.
              </span>
              <span className="md:hidden">
                Swipe left and right to browse the latest offers.
              </span>
            </p>
          </div>
        </div>

        {/* ✅ MOBILE: swipe-only slider + bottom overlay text */}
        <div className="mt-8 md:hidden">
          <div className="relative overflow-hidden rounded-2xl border bg-background">
            <div
              className="relative aspect-[4/5] w-full touch-pan-y"
              role="region"
              aria-label="Offers slider. Swipe left or right."
              onTouchStart={(e) => onStart(e.touches[0].clientX)}
              onTouchEnd={(e) => onEnd(e.changedTouches[0].clientX)}
              onMouseDown={(e) => onStart(e.clientX)}
              onMouseUp={(e) => onEnd(e.clientX)}
              onMouseLeave={(e) => onEnd(e.clientX)}
            >
              <Image
                src={activeImg}
                alt={`Offer poster ${active + 1}`}
                fill
                sizes="100vw"
                className="object-cover select-none"
                priority
                draggable={false}
              />

              {/* Bottom overlay text (non-blocking) */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0">
                <div className="bg-gradient-to-t from-black/55 via-black/10 to-transparent px-4 pb-3 pt-10">
                  <div className="text-center text-xs font-medium tracking-wide text-white/90">
                    Swipe left and right
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ DESKTOP/TABLET: Grid (max 8, load more) */}
        <div className="mt-8 hidden md:block">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {desktopVisible.map((img, idx) => {
              // IMPORTANT: open lightbox with the real index in the full list
              const realIndex = idx
              return (
                <button
                  key={img.name}
                  type="button"
                  onClick={() => handleOpen(realIndex)}
                  className="
                    group relative overflow-hidden rounded-2xl border bg-background text-left
                    transition
                    hover:-translate-y-0.5 hover:shadow-lg
                    focus:outline-none focus:ring-2 focus:ring-primary/30
                  "
                  aria-label={`Open offer poster ${realIndex + 1}`}
                >
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={img.url}
                      alt={`Offer poster ${realIndex + 1}`}
                      fill
                      sizes="25vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      priority={realIndex < 4}
                    />
                    <div className="pointer-events-none absolute inset-0 ring-0 ring-primary/20 transition group-hover:ring-2" />
                  </div>
                </button>
              )
            })}
          </div>

          {canLoadMore ? (
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center justify-center rounded-full border bg-background px-5 py-2.5 text-sm font-medium hover:bg-muted"
              >
                Load more
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* ✅ DESKTOP lightbox: arrows INSIDE image area + dots (can access ALL images) */}
      {open ? (
        <div
          className="fixed inset-0 z-50 hidden bg-black/70 backdrop-blur-sm md:block"
          onMouseDown={handleClose}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="mx-auto flex h-full max-w-6xl items-center justify-center px-4 py-8"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="w-fit max-w-[95vw] overflow-hidden rounded-2xl border bg-background shadow-2xl">
              {/* Header (only close) */}
              <div className="flex items-center justify-between gap-3 border-b px-4 py-3">
                <div className="text-sm font-medium">
                  Offer {active + 1}{" "}
                  <span className="text-muted-foreground">
                    / {count}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border bg-background hover:bg-muted"
                  aria-label="Close"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Image area with inside arrows */}
              <div className="p-4">
                <div className="relative h-[80vh] w-[90vw] max-w-4xl overflow-hidden rounded-xl border bg-muted">
                  <Image
                    src={activeImg}
                    alt={`Offer poster ${active + 1} full size`}
                    fill
                    sizes="90vw"
                    className="object-contain"
                    priority
                  />

                  <button
                    type="button"
                    onClick={goPrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-background"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-10 w-10 items-center justify-center rounded-full border bg-background/80 backdrop-blur hover:bg-background"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                {/* Dots (ALL images, even if grid shows only some) */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={[
                        "h-2.5 w-2.5 rounded-full transition",
                        i === active ? "bg-primary" : "bg-muted-foreground/30",
                      ].join(" ")}
                      aria-label={`Go to offer ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}