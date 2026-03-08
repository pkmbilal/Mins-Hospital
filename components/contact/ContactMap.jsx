export default function ContactMap() {
  return (
    <section id="map" className="mx-auto max-w-6xl px-4 pb-12">
      <div className="overflow-hidden rounded-2xl border">
        <div className="border-b bg-muted/30 px-5 py-4">
          <h2 className="text-xl font-semibold md:text-2xl">Find Us</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Visit Mins Hospital at our Karicode location.
          </p>
        </div>

        <div className="h-[320px] w-full bg-muted md:h-[420px]">
          <iframe
            title="Mins Hospital Location"
            src="https://www.google.com/maps?q=8.9156187,76.6327682&z=17&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </div>
    </section>
  )
}