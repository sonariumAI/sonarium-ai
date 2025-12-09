"use client"

import * as React from "react"
import { Section, SectionContent } from "@/components/ui/section"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { FadeIn } from "@/components/ui/fade-in"
import { TrendingDown, Target, Factory } from "lucide-react"

export function CaseStudySection() {
  const [isVisible, setIsVisible] = React.useState(false)
  const sectionRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const currentRef = sectionRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -10% 0px"
      }
    )

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <Section size="lg" width="container" ref={sectionRef}>
      <SectionContent>
        {/* Case Study Highlight Card */}
        <FadeIn>
          <div className="relative max-w-5xl mx-auto">
          {/* Background gradient with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-primary/5 rounded-3xl blur-xl opacity-70" />

          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 group">
            {/* Animated background orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700" />

            {/* Content */}
            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                    <Factory className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        Agri-Industrial • Sugar/Ethanol
                      </span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      Production Planning Optimization
                    </h2>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-8 max-w-3xl leading-relaxed">
                A major sugar and ethanol producer needed to optimize their daily production mix decisions—balancing
                sugar vs. ethanol output based on price forecasts, inventory constraints, and crushing capacity.
              </p>

              {/* Results Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {/* Forecast Error Reduction */}
                <div className="group/metric">
                  <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center group-hover/metric:scale-110 transition-transform duration-300">
                      <TrendingDown className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-green-500">
                          <AnimatedCounter
                            value={23}
                            trigger={isVisible}
                            duration={2000}
                            suffix="%"
                          />
                        </span>
                        <span className="text-sm text-muted-foreground">reduction</span>
                      </div>
                      <div className="text-sm font-medium text-foreground">Forecast Error (MAPE)</div>
                    </div>
                  </div>
                </div>

                {/* Margin Improvement */}
                <div className="group/metric">
                  <div className="flex items-center space-x-4 p-6 rounded-2xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 hover:border-secondary/40 transition-all duration-300 hover:scale-[1.02]">
                    <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover/metric:scale-110 transition-transform duration-300">
                      <Target className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="flex items-baseline space-x-2">
                        <span className="text-4xl font-bold text-secondary">
                          <AnimatedCounter
                            value={3.2}
                            trigger={isVisible}
                            duration={2000}
                            suffix="%"
                            decimals={1}
                          />
                        </span>
                        <span className="text-sm text-muted-foreground">improvement</span>
                      </div>
                      <div className="text-sm font-medium text-foreground">Gross Margin on Optimized Days</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-foreground">14-day price forecasting horizon</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-sm text-foreground">Daily production recommendations</span>
                </div>
                <div className="flex items-center space-x-3 p-4 rounded-xl bg-card/30 border border-border/30">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">Integrated with existing ERP</span>
                </div>
              </div>

              {/* Context */}
              <div className="p-4 rounded-xl bg-card/20 border border-border/20">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <span className="font-medium text-foreground">The challenge:</span> Existing spreadsheet-based planning
                  couldn&apos;t react fast enough to market volatility. Decisions were made on gut feel and stale data.
                  We built a system that ingests real-time market signals, runs price forecasts, and recommends
                  optimal sugar/ethanol splits daily—with full explainability for the operations team.
                </p>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
        </FadeIn>
      </SectionContent>
    </Section>
  )
}