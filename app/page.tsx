import { TopBanner } from "@/components/TopBanner"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { BrandsSection } from "@/components/BrandsSection"

import { BrowseByStyleSection } from "@/components/BrowseByStyleSection"
import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"

import { Footer } from "@/components/Footer"
import { NewArrivalSection } from "@/components/NewArrivalSection"
import { NewsletterSection } from "@/components/NewsLetterSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <TopBanner />
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <NewArrivalSection />
        <BrowseByStyleSection />
        <AboutSection />
        <ContactSection />
        <NewsletterSection/>
        
       
      </main>
      <Footer />
    </div>
  )
}

