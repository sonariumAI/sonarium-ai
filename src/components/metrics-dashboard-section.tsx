"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { Factory, Truck, Wheat, BarChart3, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MetricsDashboardSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  const industries = [
    {
      icon: Wheat,
      title: "Commodities & Agriculture",
      description: "Price forecasting. Production mix optimization. Hedging strategy support.",
      example: "Producers, traders, and processors navigating price volatility and production flexibility.",
      bullets: [
        "Multi-horizon price forecasting",
        "Production mix optimization",
        "Inventory and storage decisions",
        "Hedging signal generation"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Demand forecasting. Route optimization. Capacity planning.",
      example: "Freight forwarders, fleet operators, distribution networks—where operational efficiency directly impacts margins.",
      bullets: [
        "Demand forecasting by SKU/route",
        "Dynamic routing and scheduling",
        "Fleet and capacity optimization",
        "Lead time prediction"
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Production scheduling. Yield optimization. Predictive maintenance.",
      example: "Process manufacturing, discrete production, industrial operations—where throughput, quality, and downtime are measured in dollars per hour.",
      bullets: [
        "Production schedule optimization",
        "Yield and quality prediction",
        "Maintenance timing optimization",
        "Energy and resource allocation"
      ]
    },
    {
      icon: BarChart3,
      title: "Finance & Trading",
      description: "Quantitative signals. Risk modeling. Portfolio optimization.",
      example: "Commodity trading desks, asset managers, treasury operations—where better models mean better returns.",
      bullets: [
        "Alternative data integration",
        "Factor model development",
        "Risk and scenario analysis",
        "Execution optimization"
      ]
    }
  ]

  return (
    <Section id="solutions" size="lg" width="container" ref={sectionRef} className="bg-gradient-to-b from-background to-gray-900/20">
      <FadeIn>
        <SectionHeader center>
          <SectionTitle className="text-white">Industries We Serve</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl text-gray-300">
            We work with companies where operational complexity meets quantifiable decisions—
            industries where better forecasting and optimization translate directly to margin improvement.
          </SectionDescription>
        </SectionHeader>
      </FadeIn>

      <SectionContent>
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {industries.map((industry, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <div className="p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <industry.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {industry.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-snug font-medium">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Example */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Who We Work With</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {industry.example}
                  </p>
                </div>

                {/* Use Cases */}
                <div className="mt-5 pt-5 border-t border-border/30 flex-1">
                  <p className="text-xs font-bold text-gray-300 mb-3 uppercase tracking-wider">Typical Use Cases</p>
                  <ul className="space-y-2.5">
                    {industry.bullets.map((item, i) => (
                      <li key={i} className="text-sm text-gray-400 flex items-start group/item">
                        <span className="text-primary mr-2.5 mt-0.5 group-hover/item:scale-125 transition-transform">→</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* CTA */}
        <FadeIn delay={0.6}>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-10 text-center">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Different Industry? Let&apos;s Talk.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                If you have complex operational decisions, quantifiable outcomes, and data to work with—
                we can probably help. The patterns transfer across industries.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="group font-semibold">
                  Discuss Your Use Case
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </SectionContent>
    </Section>
  )
}