// components/home/CTABanner.jsx
import Link from "next/link"
import { Phone, MessageCircle, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/siteData"

export default function CTABanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-2xl border bg-primary/5 p-6 md:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Need a nurse/doctor at home today?
            </h3>
            <p className="mt-2 text-muted-foreground">
              Call or WhatsApp us—our coordinator will help you pick the right service.
            </p>
          </div>

          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
            <Button asChild className="gap-2">
              <a href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <a href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link href="/contact">
                <CalendarCheck className="h-4 w-4" />
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}