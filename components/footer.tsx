import { Telescope, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer id="contact" className="relative z-10 border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Telescope className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-orbitron)" }}>
                StarScopeHub
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your gateway to exploring the cosmos with premium astronomical instruments
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#star-map" className="text-muted-foreground hover:text-primary transition-colors">
                  Star Map
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>info@starscopehub.com</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Observatory Lane</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
              Newsletter
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">Get updates on new products and astronomy tips</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Your email" className="bg-background/50 border-border" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>&copy; 2025 StarScopeHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
