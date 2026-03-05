import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope, Clock, ShieldCheck, HeartPulse } from "lucide-react"

const HIGHLIGHTS = [
  {
    icon: Stethoscope,
    title: "Specialist-led care",
    desc: "Departments guided by experienced doctors with evidence-based treatment plans.",
  },
  {
    icon: Clock,
    title: "Fast appointments",
    desc: "Quick scheduling with streamlined workflows and minimal waiting time.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted & transparent",
    desc: "Clear communication, ethical practice, and patient-first decisions.",
  },
  {
    icon: HeartPulse,
    title: "Modern facilities",
    desc: "Clean, well-equipped rooms and reliable diagnostics for better outcomes.",
  },
]

export default function AboutHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Why patients choose us
        </h2>
        <p className="text-muted-foreground">
          Practical healthcare, warm support, and a commitment to doing things right.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item) => {
          const Icon = item.icon
          return (
            <Card key={item.title} className="h-full">
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
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