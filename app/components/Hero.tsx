"use client"

import { useState, useEffect } from "react"
import { Terminal, Truck, Globe, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getTerminalCount } from "@/lib/data"

export default function Hero() {
  const [terminalCount, setTerminalCount] = useState<number | null>(null)

  useEffect(() => {
    async function fetchCount() {
      try {
        const response = await fetch(
          "https://coverage.marlowefreight.internal/v1/terminals/active-count",
          {
            cache: "force-cache",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_MARLOWE_COVERAGE_API_KEY}`,
            },
          }
        )
        if (!response.ok) {
          throw new Error("Failed to fetch terminal count")
        }
        const data = await response.json()
        setTerminalCount(data.count)
      } catch (error) {
        console.error("Error fetching terminal count:", error)
        setTerminalCount(null)
      }
    }

    fetchCount()
  }, [])

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-bg.jpg"
          alt="Shipping containers at port"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Global Freight. <span className="text-blue-400">Simplified.</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
          Marlowe Freight connects you to {terminalCount ?? "thousands of"} terminals worldwide
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Started <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-slate-400 text-slate-200 hover:bg-slate-800"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
