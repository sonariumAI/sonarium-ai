import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { StatCard } from "@/components/ui/stat-card"
import { FadeIn } from "@/components/ui/fade-in"
import { AlertTriangle, TrendingDown, ShieldX, GitBranch } from "lucide-react"

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
            The Production Gap
          </SectionTitle>
          <SectionDescription className="mx-auto text-gray-300">
            Despite promising demos, most LLMs struggle when deployed in real-world production environments.
            Here&apos;s what enterprises are facing today.
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
            <p className="text-lg text-gray-300 mb-4">
              Ready to bridge the gap between demo and production?
            </p>
            <div className="inline-flex items-center justify-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <span className="text-sm text-gray-300">
                See how Sonarium AI transforms your LLM deployment strategy
              </span>
            </div>
          </div>
        </FadeIn>
      </SectionContent>
    </Section>
  )
}