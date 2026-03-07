import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function OffersHero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Special Medical Offers
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            Health Packages & Limited-Time Offers
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
            Explore affordable healthcare packages designed to make quality
            treatment, consultation, and preventive screening more accessible
            for you and your family.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">
                Book an Appointment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}