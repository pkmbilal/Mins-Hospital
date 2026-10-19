import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const siteUrl = "https://minshospital.com"

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mins Hospital | Trusted Healthcare & Specialist Services",
    template: "%s | Mins Hospital",
  },
  description:
    "Mins Hospital offers trusted healthcare services, specialist consultations, modern facilities, preventive checkups, and patient-focused care.",
  applicationName: "Mins Hospital",
  appleWebApp: {
    capable: true,
    title: "Mins Hospital",
    statusBarStyle: "default",
  },
  authors: [{ name: "Mins Hospital" }],
  creator: "Mins Hospital",
  publisher: "Mins Hospital",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Mins Hospital",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mins Hospital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  themeColor: "#4ac06c",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  )
}