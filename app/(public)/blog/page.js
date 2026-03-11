// app/(public)/blog/page.js
import BlogHero from "@/components/blog/BlogHero"
import BlogGrid from "@/components/blog/BlogGrid"
import { getSortedPostsData } from "@/lib/blog"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

const siteUrl = "https://minshospital.com"
const blogUrl = `${siteUrl}/blog`
const ogImage = `${siteUrl}/og-image.jpg`

export const metadata = {
  title: "Health Blog | Mins Hospital",
  description:
    "Explore expert health tips, wellness advice, patient care guidance, and the latest updates from Mins Hospital.",
  keywords: [
    "Mins Hospital blog",
    "health blog",
    "hospital blog",
    "wellness tips",
    "healthcare articles",
    "medical advice",
    "patient care tips",
    "hospital updates",
    "health awareness",
    "Mins Hospital",
  ],
  alternates: {
    canonical: "/blog",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: blogUrl,
    title: "Health Blog | Mins Hospital",
    description:
      "Explore expert health tips, wellness advice, patient care guidance, and the latest updates from Mins Hospital.",
    siteName: "Mins Hospital",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Mins Hospital Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Health Blog | Mins Hospital",
    description:
      "Explore expert health tips, wellness advice, patient care guidance, and the latest updates from Mins Hospital.",
    images: [ogImage],
  },
  category: "healthcare",
}

export default function BlogPage() {
  const posts = getSortedPostsData()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Mins Hospital Blog",
    description:
      "Explore expert health tips, wellness advice, patient care guidance, and the latest updates from Mins Hospital.",
    url: blogUrl,
    publisher: {
      "@type": "Hospital",
      name: "Mins Hospital",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.svg`,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SiteHeader />
      <BlogHero />
      <BlogGrid posts={posts} />
      <SiteFooter />
    </>
  )
}