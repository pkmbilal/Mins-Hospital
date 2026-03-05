import { Card, CardContent } from "@/components/ui/card"
import { HeartPulse, ShieldCheck } from "lucide-react"

export default function AboutMissionVision() {
  return (
    <section className="border-y bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Our Mission</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To deliver reliable, accessible, and compassionate healthcare — combining expert
                doctors, modern diagnostics, and a patient-friendly experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border bg-background">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Our Vision</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                To be a trusted community hospital known for clinical excellence, transparency,
                and continuous improvement in patient outcomes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}