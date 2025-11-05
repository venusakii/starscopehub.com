import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

const products = [
  {
    name: "StarGazer Pro",
    price: "$899",
    image: "/professional-telescope-with-tripod.jpg",
    rating: 5,
    description: "Professional-grade telescope perfect for deep-sky observation",
  },
  {
    name: "Nebula Explorer",
    price: "$1,299",
    image: "/advanced-telescope-with-computerized-mount.jpg",
    rating: 5,
    description: "Advanced computerized mount with GPS tracking capabilities",
  },
  {
    name: "Cosmic Voyager",
    price: "$649",
    image: "/portable-telescope-for-beginners.jpg",
    rating: 4,
    description: "Portable and beginner-friendly for astronomy enthusiasts",
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="relative z-10 container mx-auto px-4 py-24 bg-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
          Featured <span className="text-primary">Telescopes</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Handpicked instruments for every level of astronomer
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <Card
            key={index}
            className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
          >
            <div className="aspect-square overflow-hidden bg-secondary/30">
              <img
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                {product.name}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
              <div className="flex items-center justify-between">
                
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
