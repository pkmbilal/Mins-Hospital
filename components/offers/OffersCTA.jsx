import Link from "next/link"
import { MessageCircle, PhoneCall } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { CONTACT } from "@/lib/siteData"

export default function OffersCTA() {
  const whatsappDigits = String(CONTACT.whatsapp).replace(/\D/g, "")

  return (
    <section className="border-t bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <Card className="rounded-3xl border-border/60">
          <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
            <div className="max-w-2xl">
              <Badge variant="secondary" className="mb-3">
                Need Help Choosing?
              </Badge>

              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Talk to our team and find the right health package
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground md:text-base">
                Our staff can guide you through available offers, package
                details, and appointment booking based on your needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`tel:${CONTACT.phone}`}>
                  <PhoneCall className="mr-2 h-4 w-4" />
                  Call Now
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link
                  href={`https://wa.me/${whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}