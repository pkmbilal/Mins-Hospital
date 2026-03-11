"use client"

import { useState } from "react"
import Link from "next/link"
import { Loader2, Send, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CONTACT } from "@/lib/siteData"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const whatsappNumber = String(CONTACT.whatsapp).replace(/\D/g, "")

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const phone = formData.get("phone")
    const email = formData.get("email")
    const subject = formData.get("subject")
    const message = formData.get("message")

    const whatsappText = `Hello Mins Hospital,%0A%0AName: ${name}%0APhone: ${phone}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`

    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappText}`, "_blank")

    setLoading(false)
    e.currentTarget.reset()
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-12">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="rounded-2xl">
          <CardContent className="p-6 md:p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Send us a message
              </h2>
              <p className="mt-2 text-muted-foreground">
                Fill out the form below and connect with our team quickly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="name" placeholder="Full name" required />
                <Input name="phone" placeholder="Phone number" required />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Input name="email" type="email" placeholder="Email address" />
                <Input name="subject" placeholder="Subject" required />
              </div>

              <Textarea
                name="message"
                placeholder="Write your message here..."
                className="min-h-[140px]"
                required
              />

              <Button type="submit" className="gap-2" disabled={loading}>
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send via WhatsApp
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-primary/15 bg-primary/[0.03]">
          <CardContent className="flex h-full flex-col p-6 md:p-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-semibold tracking-tight">
                Need faster support?
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">
                For quick appointment requests and urgent general enquiries,
                contact us directly on WhatsApp or by phone. Our team will help
                you with the next steps.
              </p>
            </div>

            <div className="mt-6 flex md:flex-row flex-col md:gap-2 gap-3">
              <Button asChild className="w-full justify-center gap-2 sm:w-auto">
                <Link
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="w-full justify-center sm:w-auto"
              >
                <Link href={`tel:${CONTACT.phone}`}>Call Now</Link>
              </Button>
            </div>

            <div className="mt-8 rounded-2xl border bg-background p-4">
              <h4 className="font-medium">Why patients contact us</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Book doctor consultations</li>
                <li>• Ask about departments and services</li>
                <li>• Enquire about health packages</li>
                <li>• Get hospital directions and visit timings</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}