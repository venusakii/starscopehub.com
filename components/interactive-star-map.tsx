"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

interface Constellation {
  name: string
  stars: Array<{ x: number; y: number }>
  connections: Array<[number, number]>
}

const constellations: Constellation[] = [
  {
    name: "Orion",
    stars: [
      { x: 0.3, y: 0.3 },
      { x: 0.35, y: 0.25 },
      { x: 0.4, y: 0.3 },
      { x: 0.35, y: 0.4 },
      { x: 0.3, y: 0.5 },
      { x: 0.4, y: 0.5 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [0, 3],
      [2, 3],
      [3, 4],
      [3, 5],
    ],
  },
  {
    name: "Ursa Major",
    stars: [
      { x: 0.6, y: 0.2 },
      { x: 0.65, y: 0.25 },
      { x: 0.7, y: 0.25 },
      { x: 0.75, y: 0.3 },
      { x: 0.7, y: 0.35 },
      { x: 0.65, y: 0.35 },
      { x: 0.6, y: 0.3 },
    ],
    connections: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6],
      [6, 0],
    ],
  },
]

export function InteractiveStarMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [selectedConstellation, setSelectedConstellation] = useState<string | null>(null)
  const [hoveredStar, setHoveredStar] = useState<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    constellations.forEach((constellation) => {
      const isSelected = selectedConstellation === constellation.name

      // Draw connections
      ctx.strokeStyle = isSelected ? "#FFD700" : "rgba(255, 215, 0, 0.3)"
      ctx.lineWidth = isSelected ? 2 : 1
      ctx.setLineDash(isSelected ? [] : [5, 5])

      constellation.connections.forEach(([start, end]) => {
        const startStar = constellation.stars[start]
        const endStar = constellation.stars[end]

        ctx.beginPath()
        ctx.moveTo(startStar.x * canvas.width, startStar.y * canvas.height)
        ctx.lineTo(endStar.x * canvas.width, endStar.y * canvas.height)
        ctx.stroke()
      })

      // Draw stars
      constellation.stars.forEach((star, index) => {
        const x = star.x * canvas.width
        const y = star.y * canvas.height

        ctx.beginPath()
        ctx.arc(x, y, isSelected ? 6 : 4, 0, Math.PI * 2)
        ctx.fillStyle = isSelected ? "#FFD700" : "#FFFFFF"
        ctx.fill()

        if (isSelected) {
          ctx.strokeStyle = "rgba(255, 215, 0, 0.5)"
          ctx.lineWidth = 2
          ctx.stroke()
        }
      })
    })
  }, [selectedConstellation, hoveredStar])

  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    let clicked = false
    constellations.forEach((constellation) => {
      constellation.stars.forEach((star) => {
        const distance = Math.sqrt(Math.pow(star.x - x, 2) + Math.pow(star.y - y, 2))
        if (distance < 0.05) {
          setSelectedConstellation(constellation.name)
          clicked = true
        }
      })
    })

    if (!clicked) {
      setSelectedConstellation(null)
    }
  }

  return (
    <section id="star-map" className="relative z-10 container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-orbitron)" }}>
          Interactive <span className="text-primary">Star Map</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Click on stars to explore constellations and learn about the night sky
        </p>
      </div>

      <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 max-w-4xl mx-auto">
        <div className="relative">
          <canvas
            ref={canvasRef}
            onClick={handleCanvasClick}
            className="w-full h-[500px] cursor-pointer rounded-lg bg-background/50"
            aria-label="Interactive star map"
          />
          {selectedConstellation && (
            <div className="absolute top-4 right-4 bg-card/90 backdrop-blur-sm border border-primary/50 rounded-lg p-4">
              <h3 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: "var(--font-orbitron)" }}>
                {selectedConstellation}
              </h3>
              <p className="text-sm text-muted-foreground">Click anywhere to deselect</p>
            </div>
          )}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 justify-center">
          {constellations.map((constellation) => (
            <button
              key={constellation.name}
              onClick={() => setSelectedConstellation(constellation.name)}
              className={`px-4 py-2 rounded-lg border transition-all ${
                selectedConstellation === constellation.name
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary/50 text-foreground border-border hover:border-primary/50"
              }`}
            >
              {constellation.name}
            </button>
          ))}
        </div>
      </Card>
    </section>
  )
}
