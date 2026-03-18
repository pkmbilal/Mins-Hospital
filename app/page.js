import TopUtilityBar from "@/components/home/TopUtilityBar"
import SiteHeader from "@/components/home/SiteHeader"
import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HeroSection"
import ServicesGrid from "@/components/home/DepartmentsGrid"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import CTABanner from "@/components/home/CTABanner"
import SiteFooter from "@/components/home/SiteFooter"
import OffersSection from "@/components/home/OffersSection"
import StatsCounterStrip from "@/components/home/StatsCounterStrip"

const siteUrl = "https://minshospital.com"

export const metadata = {
  title: "Home Care Services in Kollam | Mins Hospital",
  description:
    "We provides trusted home care services in Kollam, with compassionate patient care, elderly support, and post-hospital recovery from our Karicode location.",
  keywords: [
    "home care services kollam",
    "home care kollam",
    "patient care at home kollam",
    "elderly care kollam",
    "home nurse kollam",
    "home healthcare kollam",
    "Mins Hospital",
    "hospital in Karicode",
    "hospital in Kollam",
    "healthcare Kerala",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Home Care Services in Kollam | Mins Hospital",
    description:
      "Trusted home care services in Kollam from Mins Hospital, based in Karicode, with elderly care, recovery care, and patient-focused support at home.",
    url: siteUrl,
    siteName: "Mins Hospital",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Home Care Services in Kollam - Mins Hospital",
      },
    ],
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Services Kollam | Mins Hospital",
    description:
      "Trusted home care services in Kollam from Mins Hospital in Karicode, including elderly care and recovery support at home.",
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Mins Hospital",
    url: siteUrl,
    logo: `${siteUrl}/logo.svg`,
    image: `${siteUrl}/og-image.jpg`,
    description:
      "Mins Hospital offers home care services in Kollam, with trusted patient care, elderly support, and post-hospital recovery from our Karicode location.",
    telephone: "+91 96566 10108",
    email: "info@minshospital.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kollam",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Kollam",
    },
    medicalSpecialty: [
      "Home Care Kollam",
      "General Medicine",
      "Preventive Healthcare",
      "Specialist Consultation",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <TopUtilityBar />
      <SiteHeader />

      <main>
        <h1 className="sr-only">Home Care Services in Kollam</h1>

        <HeroSection />
        <StatsCounterStrip />
        <AboutSection />
        <ServicesGrid />
        <OffersSection />
        <WhyChooseUs />
        <CTABanner />
      </main>

      <SiteFooter />
    </>
  )
}