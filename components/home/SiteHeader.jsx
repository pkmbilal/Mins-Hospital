"use client"

import Link from "next/link"
import NextImage from "next/image"
import {
  Menu,
  MessageCircle,
  CalendarCheck,
  Home,
  Stethoscope,
  Package,
  Info,
  Newspaper,
  Phone,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { NAV, CONTACT } from "@/lib/siteData"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

// Map icons by label (fallback included)
function navIcon(label) {
  const key = (label || "").toLowerCase()
  if (key.includes("home")) return Home
  if (key.includes("service")) return Stethoscope
  if (key.includes("package")) return Package
  if (key.includes("about")) return Info
  if (key.includes("blog")) return Newspaper
  if (key.includes("contact")) return Phone
  return ChevronRight
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Desktop logo */}
        <Link href="/" className="hidden items-center gap-2 md:flex">
          <NextImage
            src="/logo.svg"
            alt="Logo"
            width={170}
            height={50}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 md:hidden">
          <NextImage
            src="/logo.svg"
            alt="Logo"
            width={110}
            height={20}
            className="rounded-full"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-md font-semibold text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" className="gap-2">
            <a
              href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          <Button asChild className="gap-2">
            <Link href="/book">
              <CalendarCheck className="h-4 w-4" />
              Book Appointment
            </Link>
          </Button>
        </div>

        {/* Mobile drawer */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[86vw] max-w-xs p-0 border-l bg-background/95 backdrop-blur"
            >
              {/* Header (compact) */}
              <div className="border-b">
                <div className="px-4 py-3">
                  <SheetHeader className="text-left">
                    <SheetTitle className="flex items-center gap-2">
                      <NextImage
                        src="/logo.svg"
                        alt="Logo"
                        width={120}
                        height={28}
                        className="rounded-full"
                        priority
                      />
                    </SheetTitle>
                  </SheetHeader>
                </div>
              </div>

              <div className="px-4 py-3">
                {/* Nav links */}
                <nav className="flex flex-col gap-1.5">
                  {NAV.map((item) => {
                    const Icon = navIcon(item.label)
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className="group flex items-center justify-between rounded-lg border bg-card px-2.5 py-2 shadow-sm transition hover:bg-muted/60"
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border bg-background">
                              <Icon className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
                            </span>
                            <span className="text-sm font-semibold text-foreground">
                              {item.label}
                            </span>
                          </div>

                          <ChevronRight className="h-4 w-4 text-muted-foreground transition group-hover:translate-x-0.5 group-hover:text-foreground" />
                        </Link>
                      </SheetClose>
                    )
                  })}
                </nav>

                {/* Individual buttons */}
                <div className="mt-4 grid gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full justify-start gap-2"
                  >
                    <a
                      href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <SheetClose asChild>
                    <Button
                      asChild
                      size="lg"
                      className="w-full justify-start gap-2"
                    >
                      <Link href="/book">
                        <CalendarCheck className="h-4 w-4" />
                        Book Appointment
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}