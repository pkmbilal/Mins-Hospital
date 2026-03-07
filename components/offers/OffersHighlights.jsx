import { BadgePercent, CalendarDays, Clock3 } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const HIGHLIGHTS = [
  {
    icon: BadgePercent,
    title: "Exclusive Discounts",
    desc: "Save more on selected checkups, consultations, and wellness packages.",
  },
  {
    icon: CalendarDays,
    title: "Limited-Time Plans",
    desc: "Book before the validity period ends to enjoy offer pricing.",
  },
  {
    icon: Clock3,
    title: "Quick Booking",
    desc: "Easy appointment support through phone, WhatsApp, or contact form.",
  },
]

export default function OffersHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-4 md:grid-cols-3">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon

          return (
            <Card key={item.title} className="rounded-2xl border-border/60">
              <CardContent className="flex items-start gap-3 p-5">
                <Icon className="mt-0.5 h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}