import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ContactFaq() {
  const items = [
    {
      q: "How can I book an appointment?",
      a: "You can book an appointment by calling us, messaging us on WhatsApp, or filling out the contact form on this page.",
    },
    {
      q: "Can I ask about services before visiting?",
      a: "Yes, absolutely. Our team can help you understand departments, packages, timings, and the right point of contact before your visit.",
    },
    {
      q: "How quickly will I get a response?",
      a: "We try to respond as quickly as possible during working hours. WhatsApp and phone calls are usually the fastest options.",
    },
    {
      q: "Can I get directions to the hospital?",
      a: "Yes. You can use the map section on this page or contact us directly for detailed directions.",
    },
  ]

  return (
    <section className="mx-auto max-w-4xl px-4 pb-14">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-muted-foreground">
          Quick answers to common patient enquiries.
        </p>
      </div>

      <Accordion type="single" collapsible className="rounded-2xl border px-4">
        {items.map((item, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}