// components/home/TopUtilityBar.jsx
import Link from "next/link"
import { Mail, Phone, MessageCircle, CalendarCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CONTACT } from "@/lib/siteData"

export default function TopUtilityBar() {
  return (
    <div className="hidden border-b bg-muted/40 md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center gap-6 text-muted-foreground">

          <a className="inline-flex items-center gap-2 hover:text-foreground" href={`tel:${CONTACT.phone}`}>
            <Phone className="h-4 w-4" />
            {CONTACT.phone}
          </a>
          <a className="inline-flex items-center gap-2 hover:text-foreground" href={`mailto:${CONTACT.email}`}>
            <Mail className="h-4 w-4" />
            {CONTACT.email}
          </a>
        </div>
      </div>
    </div>
  )
}