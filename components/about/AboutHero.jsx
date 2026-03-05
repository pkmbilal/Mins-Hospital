import Link from "next/link";
import Image from "next/image";
import { PhoneCall, MessageCircle, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT } from "@/lib/siteData";

export default function AboutHero() {
  const whatsappDigits = String(CONTACT.whatsapp).replace(/\D/g, "");

  return (
    <section className="bg-muted/20">
      <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-2xl">
            <Badge variant="secondary" className="mb-3">
              About Mins Hospital
            </Badge>

            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Patient-first care, backed by modern facilities and a
              compassionate team.
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              At Mins Hospital, we combine clinical expertise, clean modern infrastructure, and friendly support to make your healthcare journey smoother — from consultation to recovery. Our doctors and staff focus on clear communication, so you always understand your options and next steps.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <Link href="/contact">
                  Contact Us <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild variant="outline" className="gap-2">
                <a href={`tel:${CONTACT.phone}`}>
                  <PhoneCall className="h-4 w-4" />
                  Call Now
                </a>
              </Button>

              <Button asChild variant="outline" className="gap-2">
                <a
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-2xl border bg-muted/40">
            <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
              <Image
                src="/images/about/about_page_hero.webp"
                alt="About Mins Hospital"
                width={1200}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
