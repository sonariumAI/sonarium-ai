import * as React from "react"
import Link from "next/link"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { AlertTriangle, TrendingDown, ShieldX, GitBranch, ArrowRight } from "lucide-react"

export function ProductionGapSection() {
  const stats = [
    {
      icon: AlertTriangle,
      stat: "15-27%",
      title: "Hallucination Rate",
      description: "Critical accuracy issues in production environments lead to unreliable outputs and user distrust.",
      variant: "danger" as const
    },
    {
      icon: TrendingDown,
      stat: "50%+",
      title: "Wasted GPU Spend",
      description: "Inefficient resource allocation and poor optimization result in massive computational waste.",
      variant: "warning" as const
    },
    {
      icon: ShieldX,
      stat: "No",
      title: "Validation Framework",
      description: "Lack of systematic testing and validation leads to unpredictable model behavior in production.",
      variant: "danger" as const
    },
    {
      icon: GitBranch,
      stat: "Zero",
      title: "Ungoverned Deployments",
      description: "Models deployed without proper governance, compliance, or monitoring frameworks in place.",
      variant: "info" as const
    }
  ]

  return (
    <Section size="lg" width="container" className="bg-gradient-to-b from-background to-gray-900/20">
      <FadeIn>
        <SectionHeader center>
          <SectionTitle className="text-white">
            The Challenge of Production-Ready AI
          </SectionTitle>
          <SectionDescription className="mx-auto text-gray-300">
            Building reliable AI systems for production is complex—whether you&apos;re starting from scratch or scaling existing models.
            Here are the critical challenges enterprises face.
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
              Ready to bridge the gap between demo and production?
            </p>
            <Link href="/book-demo">
              <Button
                size="lg"
                variant="outline"
                className="group border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
              >
                See how Sonarium AI transforms your LLM deployment strategy
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </SectionContent>
    </Section>
  )
}