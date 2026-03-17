// components/home/HeroSection.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Phone, MessageCircle, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CONTACT, TRUST_CHIPS } from "@/lib/siteData";

export default function HeroSection() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    // Hook this to your API route / server action later.
    setTimeout(() => setLoading(false), 800);
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),transparent_55%)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
        {/* Left */}
        <div className="flex flex-col justify-center">
          <Badge className="w-fit gap-2" variant="secondary">
            <ShieldCheck className="h-4 w-4" />
            Trusted Home Care • Kerala
          </Badge>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Home Care Services, Delivered to Your Home
          </h1>

          <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
            Book doctor visits, nursing care, lab tests, and recovery
            programs—fast scheduling, verified staff, and coordinated support
            for families.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/book">
                Book a Home Visit <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2">
              <a
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {TRUST_CHIPS.map((c) => {
              const Icon = c.icon;
              return (
                <span
                  key={c.text}
                  className="inline-flex items-center gap-2 rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {c.text}
                </span>
              );
            })}
          </div>
        </div>

        {/* Right: callback form */}
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Request a Callback</CardTitle>
            <CardDescription>
              Tell us what you need — we’ll call you quickly 📞
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="grid gap-3">
              <div className="grid gap-2 md:grid-cols-2">
                <Input required placeholder="Full name" name="name" />
                <Input required placeholder="Phone number" name="phone" />
              </div>
              <Input placeholder="Location (optional)" name="location" />
              <Textarea
                placeholder="What service do you need? (optional)"
                name="message"
                rows={3}
              />
              <Button disabled={loading} className="w-full">
                {loading ? "Sending..." : "Send Request"}
              </Button>
              <p className="text-xs text-muted-foreground">
                By submitting, you agree to be contacted for care coordination.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
