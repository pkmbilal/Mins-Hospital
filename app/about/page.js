import AboutHero from "@/components/about/AboutHero"
import AboutCTA from "@/components/about/AboutCTA"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import WhyChooseUs from "@/components/home/WhyChooseUs"

const siteUrl = "https://minshospital.com"

export const metadata = {
  title: "About Us",
  description:
    "Learn about Mins Hospital, our mission, values, modern facilities, and commitment to patient-first healthcare in Kollam, Kerala.",
  keywords: [
    "About Mins Hospital",
    "Mins Hospital mission",
    "hospital values",
    "patient care Kollam",
    "modern hospital facilities",
    "healthcare team Kerala",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mins Hospital | Mission, Values & Patient Care",
    description:
      "Discover Mins Hospital’s mission, values, facilities, and commitment to trusted patient-focused care.",
    url: "/about",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "About Mins Hospital",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "About Mins Hospital | Mission, Values & Patient Care",
    description:
      "Discover Mins Hospital’s mission, values, facilities, and commitment to trusted patient-focused care.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Mins Hospital",
    url: `${siteUrl}/about`,
    description:
      "Learn about Mins Hospital, our mission, values, facilities, and commitment to patient-first healthcare.",
    mainEntity: {
      "@type": "Hospital",
      name: "Mins Hospital",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Mins Hospital provides trusted healthcare services, specialist consultations, and patient-focused treatment.",
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <AboutHero />
      <WhyChooseUs className="pb-12" />
      <AboutCTA />
      <SiteFooter />
    </main>
  )
}