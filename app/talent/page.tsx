import { Navbar } from "@/components/navbar"
import { TalentHero } from "@/components/talent/talent-hero"
import AddDeveloperForm from "@/components/talent/add-developer-form"
import DeveloperGrid from "@/components/talent/developer-grid"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Talent Board | Tampa AWS Meetup",
  description:
    "The reverse job board for Tampa Bay's AWS Developer Community. Browse developer profiles and connect with local cloud talent.",
}

export default function TalentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TalentHero />
      <AddDeveloperForm />
      <DeveloperGrid />
      <Footer />
    </main>
  )
}
