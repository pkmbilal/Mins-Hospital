// app/page.js
import TopUtilityBar from "@/components/home/TopUtilityBar"
import SiteHeader from "@/components/home/SiteHeader"
import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HeroSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import CTABanner from "@/components/home/CTABanner"
import SiteFooter from "@/components/home/SiteFooter"
import OffersSection from "@/components/home/OffersSection"
import StatsCounterStrip from "@/components/home/StatsCounterStrip"

export default function HomePage() {
  return (
    <>
      <TopUtilityBar />
      <SiteHeader />

      <main>
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