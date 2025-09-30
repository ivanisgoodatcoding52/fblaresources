import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ResourcesSection } from "@/components/resources-section"
import { BusinessEducation } from "@/components/business-education"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ResourcesSection />
      <BusinessEducation />
      <Footer />
    </main>
  )
}
