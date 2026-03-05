import AboutHero from "@/components/about/AboutHero"
import AboutMissionVision from "@/components/about/AboutMissionVision"
import AboutValuesFacility from "@/components/about/AboutValuesFacility"
import AboutCTA from "@/components/about/AboutCTA"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"
import WhyChooseUs from "@/components/home/WhyChooseUs"

export const metadata = {
  title: "About | Mins Hospital",
  description:
    "Learn about Mins Hospital — our mission, values, facilities, and patient-first care.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SiteHeader />
      <AboutHero />
      <WhyChooseUs className="pb-12" />
      <AboutCTA />
      <SiteFooter />
    </main>
  )
}