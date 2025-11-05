import { Card } from "@/components/ui/card"
import { Eye, Compass, Zap, Shield } from "lucide-react"

const features = [
  {
    icon: Eye,
    title: "Crystal Clear Optics",
    description: "Advanced lens technology for unparalleled clarity and detail in every observation",
  },
  {
    icon: Compass,
    title: "Precision Tracking",
    description: "Automated celestial tracking systems to follow stars and planets with ease",
  },
  {
    icon: Zap,
    title: "Quick Setup",
    description: "User-friendly design allows you to start observing in minutes, not hours",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Weather-resistant construction and premium materials for years of exploration",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative z-10 container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
          Why Choose <span className="text-primary">StarScopeHub</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Cutting-edge technology meets user-friendly design
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
          >
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
              {feature.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
