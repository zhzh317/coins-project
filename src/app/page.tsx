import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { ContactForm } from "@/components/ContactForm"
import { ServiceCards } from "@/components/ServiceCards"
import { StatsSection } from "@/components/StatsSection"
import { WhyChooseUs } from "@/components/WhyChooseUs"
import { MarketOverview } from "@/components/MarketOverview"
import { ResearchGuides } from "@/components/ResearchGuides"
import { ContentSections } from "@/components/ContentSections"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <HeroSection />
            <ContactForm />
          </div>
        </div>
        <ServiceCards />
        <div className="container mx-auto px-4 py-16">
          <WhyChooseUs />
          <StatsSection />
          <MarketOverview />
          <ResearchGuides />
          <ContentSections />
        </div>
      </main>
      <Footer />
    </div>
  )
}
