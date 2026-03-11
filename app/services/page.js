import ServicesGrid from "@/components/home/ServicesGrid"
import SiteFooter from "@/components/home/SiteFooter"
import SiteHeader from "@/components/home/SiteHeader"
import ServicesCta from "@/components/services/ServicesCta"
import ServicesHero from "@/components/services/ServicesHero"

const siteUrl = "https://minshospital.com"

export const metadata = {
  title: "Comprehensive Medical Services",
  description:
    "Explore comprehensive medical services at Mins Hospital. Find specialized care across General Medicine, Neurology, ENT, Orthopedics, Ophthalmology, Pulmonology, Pediatrics and more in Kollam.",
  keywords: [
    "medical services Kollam",
    "Mins Hospital services",
    "multispecialty hospital Kerala",
    "neurology specialists Kollam",
    "orthopedic care Kerala",
    "ENT hospital Kollam",
    "pediatrics department",
    "ophthalmology services",
    "pulmonology treatment",
    "healthcare specialties Kerala",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Comprehensive Medical Services | Mins Hospital, Kollam",
    description:
      "Discover specialized healthcare services at Mins Hospital. From general medicine to advanced specialties, find the right care for you and your family.",
    url: "/services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Medical Services at Mins Hospital, Kollam",
      },
    ],
    type: "website",
  },
  twitter: {
    title: "Comprehensive Medical Services | Mins Hospital, Kollam",
    description:
      "Discover specialized healthcare services at Mins Hospital. From general medicine to advanced specialties, find the right care for you and your family.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Medical Services at Mins Hospital",
    url: `${siteUrl}/services`,
    description:
      "Explore comprehensive medical services at Mins Hospital. Find specialized care across General Medicine, Neurology, ENT, Orthopedics, Ophthalmology, Pulmonology, Pediatrics and more in Kollam.",
    mainEntity: {
      "@type": "Hospital",
      name: "Mins Hospital",
      url: siteUrl,
      logo: `${siteUrl}/logo.svg`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Mins Hospital provides trusted healthcare services, specialist consultations, and patient-focused treatment across multiple medical specialties.",
      medicalSpecialty: [
        "General Practice",
        "Neurology",
        "ENT",
        "Orthopedics",
        "Ophthalmology",
        "Pulmonology",
        "Pediatrics",
        "Physiotherapy",
        "Speech Therapy",
      ],
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
      <SiteFooter />
    </main>
  )
}