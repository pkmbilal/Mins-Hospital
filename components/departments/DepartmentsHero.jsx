import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ServicesHero() {
  return (
    <section className="bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: content */}
          <div className="max-w-xl">
            <Badge variant="secondary" className="mb-3">
              Our Services
            </Badge>

            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Specialist care with modern facilities
            </h1>

            <p className="mt-3 text-muted-foreground">
              Choose a department, explore available care options, and book in
              minutes. We combine specialist doctors, reliable diagnostics, and
              clean facilities to deliver a smoother hospital experience — with
              support before and after your visit.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <Link href="/contact">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline">
                <Link href="/about">About Hospital</Link>
              </Button>
            </div>

            {/* mini trust line */}
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
              <span className="rounded-full border bg-background px-3 py-1">
                Same-day visits
              </span>
              <span className="rounded-full border bg-background px-3 py-1">
                Verified staff
              </span>
              <span className="rounded-full border bg-background px-3 py-1">
                Clean rooms
              </span>
              <span className="rounded-full border bg-background px-3 py-1">
                Fast diagnostics
              </span>
            </div>
          </div>

          {/* Right: image placeholder */}
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
          {/* end right */}
        </div>
      </div>
    </section>
  );
}
