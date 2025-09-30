import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { PillarCard } from "@/components/ui/pillar-card"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Target, Zap, Shield, DollarSign } from "lucide-react"

export function FourPillarsSection() {
  const pillars = [
    {
      icon: Target,
      title: "LLM Evaluation",
      description: "Comprehensive testing and validation frameworks that ensure your models perform reliably across diverse scenarios and edge cases.",
      features: [
        "Advanced coverage scoring algorithms",
        "Real-time hallucination detection",
        "Bias and fairness assessment",
        "Performance benchmarking suites",
        "Custom evaluation metrics"
      ],
      outcomes: [
        "95%+ accuracy in production environments",
        "Reduced hallucination rates by 60-80%",
        "Quantified model reliability scores",
        "Comprehensive evaluation reports"
      ],
      variant: "primary" as const
    },
    {
      icon: Zap,
      title: "Production Deployment",
      description: "Enterprise-grade deployment infrastructure with intelligent serving optimization and comprehensive monitoring capabilities.",
      features: [
        "Intelligent serving optimization",
        "Auto-scaling infrastructure",
        "Real-time performance monitoring",
        "A/B testing frameworks",
        "Rollback and versioning systems"
      ],
      outcomes: [
        "99.9% uptime and availability",
        "50% faster response times",
        "Seamless scaling to millions of requests",
        "Zero-downtime deployments"
      ],
      variant: "secondary" as const
    },
    {
      icon: Shield,
      title: "AI Governance",
      description: "Complete governance framework ensuring compliance, security, and ethical AI practices with comprehensive audit trails.",
      features: [
        "AIGN (AI Governance Network) framework",
        "Comprehensive audit trails",
        "Compliance monitoring",
        "Risk assessment protocols",
        "Policy enforcement automation"
      ],
      outcomes: [
        "Full regulatory compliance",
        "Complete traceability and accountability",
        "Risk mitigation and security",
        "Ethical AI implementation"
      ],
      variant: "accent" as const
    },
    {
      icon: DollarSign,
      title: "Cost Optimization",
      description: "Advanced optimization strategies that dramatically reduce computational costs while maintaining or improving performance.",
      features: [
        "GPU utilization optimization",
        "Intelligent caching systems",
        "Resource allocation algorithms",
        "Cost monitoring and alerts",
        "Performance vs. cost analysis"
      ],
      outcomes: [
        "60-80% reduction in GPU costs",
        "Optimal resource utilization",
        "Predictable cost structures",
        "ROI-driven optimization strategies"
      ],
      variant: "default" as const
    }
  ]

  return (
    <AnimatedBackground variant="subtle" className="py-20">
      <Section size="lg" width="container">
        <SectionHeader center>
          <SectionTitle className="text-white mb-4">
            Four Pillars of Production Excellence
          </SectionTitle>
          <SectionDescription className="mx-auto text-gray-300 max-w-3xl">
            Our comprehensive approach transforms your LLMs from experimental prototypes
            into robust, scalable, and cost-effective production systems.
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
                Ready to Build Production-Ready LLMs?
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our four-pillar approach ensures your models don&apos;t just work in demos—they excel in production.
                Get started with a comprehensive evaluation of your current LLM infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <div className="px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-medium">
                  Evaluation
                </div>
                <div className="px-4 py-2 bg-secondary/20 text-secondary rounded-lg text-sm font-medium">
                  Deployment
                </div>
                <div className="px-4 py-2 bg-accent/20 text-accent rounded-lg text-sm font-medium">
                  Governance
                </div>
                <div className="px-4 py-2 bg-white/10 text-white rounded-lg text-sm font-medium">
                  Optimization
                </div>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>
    </AnimatedBackground>
  )
}