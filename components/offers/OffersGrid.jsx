import Link from "next/link"
import {
  BadgePercent,
  CalendarDays,
  CheckCircle2,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const OFFERS = [
  {
    id: 1,
    title: "General Health Checkup",
    subtitle: "Complete preventive care package for adults",
    discount: "20% OFF",
    price: "SAR 199",
    oldPrice: "SAR 249",
    validTill: "Valid till 31 March 2026",
    icon: HeartPulse,
    features: [
      "Doctor consultation",
      "Blood pressure check",
      "Basic blood tests",
      "Blood sugar screening",
      "Health summary report",
    ],
    tag: "Popular",
  },
  {
    id: 2,
    title: "Women’s Wellness Package",
    subtitle: "Routine screening and consultation for women’s health",
    discount: "15% OFF",
    price: "SAR 299",
    oldPrice: "SAR 349",
    validTill: "Valid till 31 March 2026",
    icon: ShieldCheck,
    features: [
      "Specialist consultation",
      "Routine lab tests",
      "Vitamin profile",
      "Health screening",
      "Follow-up guidance",
    ],
    tag: "Limited Time",
  },
  {
    id: 3,
    title: "Child Care Package",
    subtitle: "Essential pediatric consultation and wellness checks",
    discount: "10% OFF",
    price: "SAR 149",
    oldPrice: "SAR 169",
    validTill: "Valid till 31 March 2026",
    icon: Stethoscope,
    features: [
      "Pediatric consultation",
      "Growth assessment",
      "Basic wellness check",
      "Nutrition advice",
      "Parent guidance",
    ],
    tag: "Family Care",
  },
  {
    id: 4,
    title: "Diabetes Screening Offer",
    subtitle: "Early screening package for better health management",
    discount: "25% OFF",
    price: "SAR 179",
    oldPrice: "SAR 239",
    validTill: "Valid till 31 March 2026",
    icon: BadgePercent,
    features: [
      "Blood sugar testing",
      "Doctor review",
      "Lifestyle guidance",
      "Risk assessment",
      "Follow-up recommendation",
    ],
    tag: "Best Value",
  },
]

export default function OffersGrid() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-14">
      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Current Offers
        </h2>
        <p className="mt-2 text-sm text-muted-foreground md:text-base">
          Choose the package that best suits your needs and book your visit
          with confidence.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {OFFERS.map((offer) => {
          const Icon = offer.icon

          return (
            <Card
              key={offer.id}
              className="group overflow-hidden rounded-3xl border-border/60 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="p-0">
                <div className="border-b bg-muted/30 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div>
                      <div className="mb-2 flex flex-wrap gap-2">
                        <Badge variant="secondary">{offer.tag}</Badge>
                        <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                          {offer.discount}
                        </Badge>
                      </div>

                      <h3 className="text-xl font-semibold">{offer.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {offer.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-end gap-3">
                    <span className="text-3xl font-bold tracking-tight text-primary">
                      {offer.price}
                    </span>
                    <span className="pb-1 text-sm text-muted-foreground line-through">
                      {offer.oldPrice}
                    </span>
                  </div>

                  <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarDays className="h-4 w-4" />
                    {offer.validTill}
                  </p>

                  <div className="mt-5 space-y-3">
                    {offer.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/contact">
                        Book Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>

                    <Button asChild variant="outline">
                      <Link href="/services">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}