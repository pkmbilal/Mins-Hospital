// components/home/AboutSection.jsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AboutSection({
  eyebrow = "About Us",
  heading = "Home Care Service in Karicode, Kollam",
  text = "We provide Home Care Services in Karicode, Kollam with verified professionals, clear clinical protocols, and a dedicated care coordinator for every family—ensuring safety, comfort, and consistent outcomes across doctor visits, nursing care, and recovery programs.",
  bullets = [
    "Verified doctors & nurses",
    "Clinical protocols & checklists",
    "Care coordinator support",
    "Same-day scheduling (subject to availability)",
  ],
  ctaLabel = "Learn more",
  ctaHref = "/about",
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid items-center gap-8 md:grid-cols-2">
        {/* Left: Image space */}
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/40">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              <Image
                src="/images/home/about-hero-img.webp"
                alt="About Mins Hospital"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Optional floating tag */}
          <div className="absolute -bottom-4 left-4 rounded-2xl border bg-green-50 px-4 py-3 shadow-sm">
            <div className="text-sm font-medium">Trusted Home Care</div>
            <div className="text-xs text-muted-foreground">
              Coordinated • Verified • Safe
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:pl-4">
          <Badge variant="secondary" className="w-fit">
            {eyebrow}
          </Badge>

          <h1 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
            {heading}
          </h1>

          <p className="mt-4 text-muted-foreground">{text}</p>

          <ul className="mt-6 grid gap-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="gap-2">
              <Link href={ctaHref}>
                {ctaLabel} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact">Talk to coordinator</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
