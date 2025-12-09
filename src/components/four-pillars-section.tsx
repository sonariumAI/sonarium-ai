import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { PillarCard } from "@/components/ui/pillar-card"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { TrendingUp, Cog, BarChart3, Clock } from "lucide-react"

export function FourPillarsSection() {
  const pillars = [
    {
      icon: TrendingUp,
      title: "Demand & Price Forecasting",
      description: "Custom ML models that predict market movements, demand patterns, and price dynamics with quantified uncertainty.",
      features: [
        "Multi-horizon forecasting (days to quarters)",
        "Uncertainty quantification & confidence intervals",
        "External signal integration (weather, market data)",
        "Regime change detection",
        "Backtesting against historical decisions"
      ],
      outcomes: [
        "15-25% forecast error reduction (typical range based on data maturity)",
        "Earlier detection of market shifts",
        "Quantified confidence for decision-making",
        "Audit trail for every prediction"
      ],
      variant: "primary" as const
    },
    {
      icon: Cog,
      title: "Operational Optimization",
      description: "Optimization systems that turn forecasts into actionable decisions—production schedules, inventory levels, routing.",
      features: [
        "Mixed-integer and constraint programming",
        "Multi-objective optimization (cost, risk, throughput)",
        "What-if scenario analysis",
        "Real-time re-optimization triggers",
        "Integration with existing ERP/planning systems"
      ],
      outcomes: [
        "2-5% margin improvement (see case study: 3.2% for sugar/ethanol)",
        "Reduced manual planning overhead",
        "Faster response to supply/demand changes",
        "Defensible, explainable decisions"
      ],
      variant: "secondary" as const
    },
    {
      icon: BarChart3,
      title: "Decision Support Systems",
      description: "Tools that surface insights to operators and executives—not black boxes, but systems humans can trust and override.",
      features: [
        "Explainable model outputs",
        "Scenario comparison dashboards",
        "Alert systems for anomalies",
        "Historical decision tracking",
        "Role-based access and workflows"
      ],
      outcomes: [
        "Faster decision cycles (hours → minutes)",
        "Reduced reliance on tribal knowledge",
        "Clear accountability for recommendations",
        "Adoption by non-technical users"
      ],
      variant: "accent" as const
    },
    {
      icon: Clock,
      title: "Production ML Infrastructure",
      description: "The engineering that keeps models running reliably—monitoring, retraining, drift detection, and graceful degradation.",
      features: [
        "Automated model retraining pipelines",
        "Data and concept drift monitoring",
        "Fallback logic for edge cases",
        "Performance dashboards",
        "Integration with existing data infrastructure"
      ],
      outcomes: [
        "99.5%+ model availability",
        "Early warning on model degradation",
        "Reduced time-to-fix for issues",
        "Predictable maintenance overhead"
      ],
      variant: "default" as const
    }
  ]

  return (
    <AnimatedBackground variant="subtle" className="py-20">
      <Section size="lg" width="container">
        <SectionHeader center>
          <SectionTitle className="text-white mb-4">
            What We Build
          </SectionTitle>
          <SectionDescription className="mx-auto text-gray-300 max-w-3xl">
            End-to-end ML systems for operational decisions—from forecasting models
            to optimization engines to the infrastructure that keeps them running.
          </SectionDescription>
        </SectionHeader>

        <SectionContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard
                key={index}
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                features={pillar.features}
                outcomes={pillar.outcomes}
                variant={pillar.variant}
                className="h-full"
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center space-y-4 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-white">
                How We Typically Engage
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Most engagements start with a paid diagnostic: we review your current forecasting accuracy,
                decision processes, and data infrastructure to scope the highest-impact work.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium">
                  Forecasting
                </div>
                <div className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg text-sm font-medium">
                  Optimization
                </div>
                <div className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium">
                  Decision Support
                </div>
                <div className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  Infrastructure
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </AnimatedBackground>
  )
}