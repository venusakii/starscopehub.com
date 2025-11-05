"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Telescope } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="relative z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Telescope className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary" style={{ fontFamily: "var(--font-orbitron)" }}>
              StarScopeHub
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#star-map" className="text-foreground hover:text-primary transition-colors">
              Star Map
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started</Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 flex flex-col gap-4 pb-4">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#star-map" className="text-foreground hover:text-primary transition-colors">
              Star Map
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Get Started</Button>
          </nav>
        )}
      </div>
    </header>
  )
}
