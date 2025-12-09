import * as React from "react"
import Link from "next/link"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingDown, Calculator, Clock, ArrowRight } from "lucide-react"

export function ProductionGapSection() {
  const stats = [
    {
      icon: TrendingDown,
      stat: "15-30%",
      title: "Forecast Error",
      description: "The typical MAPE range we measure in initial assessments—often reducible by a third or more.",
      variant: "danger" as const
    },
    {
      icon: Calculator,
      stat: "Spreadsheet",
      title: "Planning Tools",
      description: "Production decisions often run through Excel. We've seen 8-figure operations managed this way.",
      variant: "warning" as const
    },
    {
      icon: AlertTriangle,
      stat: "Low Trust",
      title: "Model Adoption",
      description: "Existing models often go unused. Operators need explainability and override capability to trust outputs.",
      variant: "danger" as const
    },
    {
      icon: Clock,
      stat: "Days",
      title: "Reaction Time",
      description: "Manual replanning cycles mean market shifts are detected too late to capture the full opportunity.",
      variant: "info" as const
    }
  ]

  return (
    <Section size="lg" width="container" className="bg-gradient-to-b from-background to-gray-900/20">
      <FadeIn>
        <SectionHeader center>
          <SectionTitle className="text-white">
            Patterns We See in Initial Assessments
          </SectionTitle>
          <SectionDescription className="mx-auto text-gray-300">
            In our diagnostic work with commodity and logistics companies,
            these are the gaps that typically surface—and where we find the most opportunity.
          </SectionDescription>
        </SectionHeader>
      </FadeIn>

      <SectionContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <StatCard
                icon={stat.icon}
                stat={stat.stat}
                title={stat.title}
                description={stat.description}
                variant={stat.variant}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>

        {/* Call to Action */}
        <FadeIn delay={0.8}>
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-300 mb-6">
              What would a 20% improvement in forecast accuracy mean for your margins?
            </p>
            <Link href="/book-demo">
              <Button
                size="lg"
                variant="outline"
                className="group border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                Discuss your forecasting challenges
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </SectionContent>
    </Section>
  )
}