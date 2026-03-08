import Link from "next/link"
import {
  CalendarDays,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
  Activity,
  ArrowRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const OFFERS = [
  {
    id: 1,
    title: "Fever Profile Test",
    subtitle: "Essential fever screening package",
    discount: "₹300 OFF",
    price: "₹499",
    oldPrice: "₹799",
    validTill: "Limited period offer",
    icon: HeartPulse,
    features: ["CBC", "CRP", "Widal Test Card", "Urine Routine"],
    tag: "Popular",
  },
  {
    id: 2,
    title: "Diabetic Health",
    subtitle: "Diabetes screening and consultation package",
    discount: "₹251 OFF",
    price: "₹499",
    oldPrice: "₹750",
    validTill: "Limited period offer",
    icon: Activity,
    features: [
      "Blood Group",
      "Doctor Consulting",
      "FBS",
      "PPBS",
      "RBS",
      "HBA1C",
      "Urea",
      "Creatinine",
      "Urine Albumin & Sugar",
    ],
    tag: "Best Value",
  },
  {
    id: 3,
    title: "Full Body Health Checkup",
    subtitle: "Advanced full body screening package",
    discount: "₹300 OFF",
    price: "₹999",
    oldPrice: "₹1299",
    validTill: "Limited period offer",
    icon: ShieldCheck,
    features: [
      "FBS",
      "PPBS",
      "HBA1C",
      "Lipid Profile",
      "RFT",
      "LFT",
      "Urine Routine",
      "CBC",
      "HIV Card",
      "HCV Card",
      "HBSAG Card",
    ],
    tag: "Comprehensive",
  },
  {
    id: 4,
    title: "Full Body Checkup",
    subtitle: "Routine full body checkup package",
    discount: "₹300 OFF",
    price: "₹799",
    oldPrice: "₹1099",
    validTill: "Limited period offer",
    icon: Stethoscope,
    features: [
      "FBS",
      "Lipid Profile",
      "RFT",
      "LFT",
      "Urine Routine",
      "ECG",
    ],
    tag: "Special Offer",
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

                  <div className="mt-5 flex flex-wrap gap-2">
                    {offer.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {feature}
                      </span>
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