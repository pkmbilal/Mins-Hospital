import ServicesGrid from "@/components/home/ServicesGrid"
import SiteFooter from "@/components/home/SiteFooter"
import SiteHeader from "@/components/home/SiteHeader"
import ServicesCta from "@/components/services/ServicesCta"
import ServicesHero from "@/components/services/ServicesHero"

export const metadata = {
  title: "Services | Mins Hospital",
  description:
    "Explore Mins Hospital services by category. Search and filter to find the right care.",
}

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
      <SiteFooter />
    </main>
  )
}