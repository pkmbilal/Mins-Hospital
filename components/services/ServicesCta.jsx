import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ServicesCta() {
  return (
    <section className="border-t bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border bg-background p-6 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <h3 className="text-xl font-semibold tracking-tight">
              Not sure which service you need? 🤝
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share your symptoms or goal — we’ll guide you to the right department and schedule
              the earliest available consultation.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/about">Learn more</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}