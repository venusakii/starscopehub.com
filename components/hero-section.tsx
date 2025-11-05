import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative z-10 container mx-auto px-4 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm text-primary">Explore the Universe</span>
        </div>

        <h1
          className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight"
          style={{ fontFamily: "var(--font-orbitron)" }}
        >
          Discover the <span className="text-primary">Cosmos</span>
          <br />
          Like Never Before
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-2xl mx-auto">
          Premium telescopes and astronomical instruments designed for amateur astronomers who dream of exploring the
          depths of space
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
            Browse Telescopes
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-8 border-primary/30 hover:bg-primary/10 bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
