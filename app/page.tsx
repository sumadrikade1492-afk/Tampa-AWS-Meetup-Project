import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EventsSection } from "@/components/ui/events-section"
import { SpeakersSection } from "@/components/speakers-section"
import { GallerySection } from "@/components/gallery-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function TampaAWSMeetup() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <SpeakersSection />
      <GallerySection />
      <SponsorsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}