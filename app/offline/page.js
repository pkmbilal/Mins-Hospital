import { WifiOff, Phone } from "lucide-react"
import { CONTACT } from "@/lib/siteData"

export const metadata = {
  title: "Offline",
  robots: { index: false, follow: false },
}

// Plain <a> tags so this page works even if JS chunks aren't cached.
export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/20 px-4">
      <div className="w-full max-w-md rounded-2xl border bg-background p-8 text-center">
        <WifiOff className="mx-auto h-10 w-10 text-primary" />
        <h1 className="mt-4 text-2xl font-semibold tracking-tight">
          You&apos;re offline
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          This page isn&apos;t available without an internet connection. Please
          check your connection and try again.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full reload is the point */}
          <a
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-md border px-4 text-sm font-medium hover:bg-muted"
          >
            <Phone className="h-4 w-4" />
            Call {CONTACT.phone}
          </a>
        </div>
      </div>
    </main>
  )
}
