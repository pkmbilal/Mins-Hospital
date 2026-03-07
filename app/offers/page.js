import OffersHero from "@/components/offers/OffersHero"
import OffersHighlights from "@/components/offers/OffersHighlights"
import OffersGrid from "@/components/offers/OffersGrid"
import OffersCTA from "@/components/offers/OffersCTA"
import SiteHeader from "@/components/home/SiteHeader"
import SiteFooter from "@/components/home/SiteFooter"

export default function OffersPage() {
  return (
    <main className="bg-background">
      <SiteHeader />
      <OffersHero />
      <OffersHighlights />
      <OffersGrid />
      <OffersCTA />
      <SiteFooter />
    </main>
  )
}