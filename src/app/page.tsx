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
import AdBanner from "@/components/AdBanner"

const ad = {
  href: "https://shrinkme.io/ref/Hunteruer",
  title: "Make short links and earn the biggest money",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-crypto-pattern">
      <Header />
      <main className="space-y-12">
        <div className="container mx-auto px-4 pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <HeroSection />
            <ContactForm />
          </div>
        </div>

        <AdBanner
          href={ad.href}
          imgSrc="https://shrinkme.io/banners/ref/970x250.png"
          imgTitle={ad.title}
        />

        <ServiceCards />

        <div className="container mx-auto px-4 space-y-12">
          <WhyChooseUs />
          
          <AdBanner
            href={ad.href}
            imgSrc="https://shrinkme.io/banners/ref/970x90.png"
            imgTitle={ad.title}
          />

          <ResearchGuides />
          <StatsSection />
          <MarketOverview />
          <ContentSections />
        </div>
      </main>
      <Footer />
    </div>
  )
}
