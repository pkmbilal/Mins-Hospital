import Link from "next/link"
import {
  PhoneCall,
  MessageCircle,
  Mail,
  MapPin,
  Clock3,
  ArrowUpRight,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { CONTACT } from "@/lib/siteData"

const INFO = [
  {
    icon: PhoneCall,
    title: "Call Us",
    value: CONTACT.phone,
    href: `tel:${CONTACT.phone}`,
    desc: "Speak directly with our team for appointments and assistance.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: CONTACT.whatsapp,
    href: `https://wa.me/${String(CONTACT.whatsapp).replace(/\D/g, "")}`,
    desc: "Chat with us quickly for support and booking help.",
  },
  {
    icon: Mail,
    title: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
    desc: "Send us your questions and we’ll get back to you soon.",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "MINS HOSPITAL - KARICODE",
    href: "#map",
    desc: "Find directions and plan your visit easily.",
  },
]

export default function ContactInfoCards() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10 md:py-12">
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {INFO.map((item) => {
          const Icon = item.icon

          return (
            <Card
              key={item.title}
              className="group rounded-2xl border-border/60 transition-all hover:-translate-y-0.5 hover:shadow-sm"
            >
              <CardContent className="p-3 sm:p-5">
                {/* mobile = horizontal compact | larger screens = normal vertical */}
                <div className="flex items-center gap-3 sm:block">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:mb-4 sm:h-11 sm:w-11">
                    <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold sm:text-lg">
                      {item.title}
                    </h3>

                    {/* hide long description on mobile for compact look */}
                    <p className="mt-1 hidden text-sm leading-6 text-muted-foreground sm:block">
                      {item.desc}
                    </p>

                    <Link
                      href={item.href}
                      className="mt-1 inline-flex max-w-full items-center gap-1 text-xs font-medium text-primary hover:underline sm:mt-4 sm:text-sm"
                    >
                      <span className="truncate">{item.value}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="mt-4 rounded-2xl border bg-background p-4 sm:mt-6 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 rounded-lg bg-primary/10 p-2 text-primary">
            <Clock3 className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>

          <div>
            <h3 className="text-sm font-semibold sm:text-base">Working Hours</h3>
            <p className="mt-1 text-xs leading-5 text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
              Monday to Saturday: 8:00 AM – 8:00 PM
              <br />
              Sunday: Emergency support only
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}