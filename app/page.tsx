import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ProductsSection } from "@/components/products-section"
import { InteractiveStarMap } from "@/components/interactive-star-map"
import { Footer } from "@/components/footer"
import { StarField } from "@/components/star-field"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <StarField />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductsSection />
      <InteractiveStarMap />
      <Footer />
    </main>
  )
}
