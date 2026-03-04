// components/home/SiteFooter.jsx
import Link from "next/link"
import { Mail, Phone, MessageCircle } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { CONTACT, NAV, SERVICES } from "@/lib/siteData"

export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-primary/10" />
              <div className="font-semibold">Mins Hospital</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Home healthcare services with verified staff, clinical protocols, and coordinated support for families.
            </p>
          </div>

          <div>
            <div className="font-medium">Quick Links</div>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {NAV.map((n) => (
                <Link key={n.href} href={n.href} className="hover:text-foreground">
                  {n.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium">Services</div>
            <div className="mt-3 grid gap-2 text-sm text-muted-foreground">
              {SERVICES.slice(0, 6).map((s) => (
                <Link key={s.title} href="/services" className="hover:text-foreground">
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="font-medium">Contact</div>
            <div className="mt-3 grid gap-3 text-sm text-muted-foreground">
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${CONTACT.phone}`}>
                <Phone className="h-4 w-4" />
                {CONTACT.phone}
              </a>
              <a
                className="inline-flex items-center gap-2 hover:text-foreground"
                href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${CONTACT.email}`}>
                <Mail className="h-4 w-4" />
                {CONTACT.email}
              </a>

              <div className="mt-2 grid gap-2 text-xs text-muted-foreground">
                <Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-foreground">Terms</Link>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />
        <div className="flex flex-col gap-2 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Mins Hospital. All rights reserved.</span>
          <span>Built with care 💚</span>
        </div>
      </div>
    </footer>
  )
}