import { Badge } from "@/components/ui/badge"

export default function ContactHero() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            Contact Mins Hospital
          </Badge>

          <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
            We’re here to help you with appointments, enquiries, and support
          </h1>

          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            Whether you want to book a consultation, ask about our services, or
            get directions to the hospital, our team is ready to assist you.
            Reach out through phone, WhatsApp, email, or the contact form below.
          </p>
        </div>
      </div>
    </section>
  )
}