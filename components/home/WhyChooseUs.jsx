// components/home/WhyChooseUs.jsx
import { Card, CardContent } from "@/components/ui/card"
import { DIFFERENTIATORS, STATS } from "@/lib/siteData"

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Why choose us</h2>
          <p className="mt-2 text-muted-foreground">
            Reliable care is about people + process. We focus on both ✅
          </p>

          <div className="mt-6 grid gap-3">
            {DIFFERENTIATORS.map((d) => (
              <Card key={d.title} className="rounded-2xl">
                <CardContent className="p-5">
                  <div className="font-medium">{d.title}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{d.desc}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="md:pl-6">
          <div className="rounded-2xl border bg-muted/30 p-6">
            <h3 className="text-lg font-semibold">Impact snapshot</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Add real numbers if you have them — otherwise keep it simple.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-2xl bg-background p-5">
                  <div className="text-2xl font-semibold">{s.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 aspect-video rounded-2xl border bg-background/60">
              <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                Optional: map/coverage image
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}