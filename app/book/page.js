import { Suspense } from "react"
import { Badge } from "@/components/ui/badge"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import BookingForm from "@/components/book/BookingForm"

export const metadata = {
  title: "Book an Appointment",
  description:
    "Book an appointment at Mins Hospital, Kollam. Choose a department, pick a convenient date and time, and our team will call you to confirm.",
  alternates: {
    canonical: "/book",
  },
}

export default function BookPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b bg-muted/30">
          <div className="mx-auto max-w-3xl px-4 py-8 md:py-12">
            <Badge variant="secondary" className="mb-3">
              Appointments
            </Badge>
            <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
              Book an Appointment
            </h1>
            <p className="mt-2 text-sm text-muted-foreground md:text-base">
              Choose a department and a time that suits you. Our team will call
              you to confirm.
            </p>
          </div>
        </section>

        <Suspense>
          <BookingForm />
        </Suspense>
      </main>
      <SiteFooter />
    </>
  )
}
