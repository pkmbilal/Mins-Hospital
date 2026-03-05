import Link from "next/link"
import { PhoneCall, MessageCircle, CalendarCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/siteData"

export default function AboutCTA() {
  const whatsappDigits = String(CONTACT.whatsapp).replace(/\D/g, "")

  return (
    <section className="relative overflow-hidden">
      {/* Background pattern (medical icons vibe) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'%3E%3Cg fill='none' stroke='%23000' stroke-width='2' opacity='1'%3E%3Cpath d='M110 18v36M92 36h36'/%3E%3Crect x='28' y='28' width='52' height='52' rx='12'/%3E%3Cpath d='M54 40v28M40 54h28'/%3E%3Ccircle cx='178' cy='54' r='22'/%3E%3Cpath d='M166 54h24M178 42v24'/%3E%3Cpath d='M40 158c20-14 40-14 60 0s40 14 60 0 40-14 60 0'/%3E%3Cpath d='M126 146c6-10 14-16 24-16 18 0 32 14 32 32 0 20-20 34-56 56-36-22-56-36-56-56 0-18 14-32 32-32 10 0 18 6 24 16z' opacity='0.6'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "240px 240px",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      />

      {/* Soft overlay so text pops */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-background/70" />

      <div className="relative mx-auto max-w-6xl px-12 md:px-4 pb-12 md:pt-8 md:pb-18">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-2xl font-semibold tracking-tight md:text-3xl">
            Your health, on your time. book an appointment.
          </p>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            Fast scheduling, friendly support, and trusted care when you need it.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild className="gap-2" size="lg">
              <Link href="/contact">
                <CalendarCheck className="h-4 w-4" />
                Book an Appointment
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 hidden md:inline-flex">
              <a
                href={`https://wa.me/${whatsappDigits}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}