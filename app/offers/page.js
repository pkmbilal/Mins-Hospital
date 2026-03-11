import OffersHero from "@/components/offers/OffersHero"
import OffersHighlights from "@/components/offers/OffersHighlights"
import OffersGrid from "@/components/offers/OffersGrid"
import OffersCTA from "@/components/offers/OffersCTA"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

const siteUrl = "https://minshospital.com"

export const metadata = {
  title: "Special Medical Offers & Packages",
  description:
    "Explore exclusive medical offers and health packages at Mins Hospital. Save on consultations, health checkups, specialty treatments, and wellness programs in Kollam.",
  keywords: [
    "medical offers Kollam",
    "Mins Hospital offers",
    "health checkup packages",
    "specialty treatment discounts",
    "hospital deals Kerala",
    "affordable healthcare Kollam",
  ],
  alternates: {
    canonical: "/offers",
  },
  openGraph: {
    title: "Special Medical Offers & Packages | Mins Hospital, Kollam",
    description:
      "Discover exclusive healthcare packages and special offers at Mins Hospital. Affordable medical services, health checkup camps, and specialty treatment discounts.",
    url: "/offers",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Offers at Mins Hospital, Kollam",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Special Medical Offers & Packages | Mins Hospital, Kollam",
    description:
      "Discover exclusive healthcare packages and special offers at Mins Hospital. Affordable medical services, health checkup camps, and specialty treatment discounts.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function OffersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Medical Offers at Mins Hospital",
    url: `${siteUrl}/offers`,
    description:
      "Explore exclusive medical offers and health packages at Mins Hospital. Save on consultations, health checkups, specialty treatments, and wellness programs in Kollam.",
    mainEntity: {
      "@type": "Hospital",
      name: "Mins Hospital",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Mins Hospital provides trusted healthcare services, specialist consultations, and patient-focused treatment with exclusive medical packages.",
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <OffersHero />
      <OffersHighlights />
      <OffersGrid />
      <OffersCTA />
      <SiteFooter />
    </main>
  )
}