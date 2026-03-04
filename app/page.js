// app/page.js
import TopUtilityBar from "@/components/home/TopUtilityBar"
import SiteHeader from "@/components/home/SiteHeader"
import AboutSection from "@/components/home/AboutSection"
import HeroSection from "@/components/home/HeroSection"
import ServicesGrid from "@/components/home/ServicesGrid"
import PackagesSection from "@/components/home/PackagesSection"
import WhyChooseUs from "@/components/home/WhyChooseUs"
import Testimonials from "@/components/home/Testimonials"
import CTABanner from "@/components/home/CTABanner"
import BlogSection from "@/components/home/BlogSection"
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
        {/* <Testimonials /> */}
        <CTABanner />
        <BlogSection />
      </main>

      <SiteFooter />
    </>
  )
}