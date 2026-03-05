import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, ShieldCheck, Users } from "lucide-react"

const VALUES = [
  {
    icon: Sparkles,
    title: "Compassion",
    desc: "We treat every patient with kindness, dignity, and respect.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "Honest guidance, clear pricing, and responsible medical decisions.",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Doctors, nurses, and staff collaborate to deliver seamless care.",
  },
]

export default function AboutValuesFacility() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Our values</h2>
          <p className="mt-2 text-muted-foreground">
            The standards we hold ourselves to — every day, with every patient.
          </p>

          <div className="mt-6 space-y-3">
            {VALUES.map((v) => {
              const Icon = v.icon
              return (
                <div key={v.title} className="flex gap-3">
                  <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-lg border bg-background">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-semibold">{v.title}</p>
                    <p className="text-sm text-muted-foreground">{v.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative h-[260px] w-full">
              <Image src="/about/facility.jpg" alt="Hospital facility" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold">Clean, calm, and well-equipped</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                We focus on a comfortable environment, hygienic standards, and dependable
                diagnostics so patients feel confident and supported.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}