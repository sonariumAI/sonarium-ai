"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { MetricCard } from "@/components/ui/metric-card"
import { FadeIn } from "@/components/ui/fade-in"
import { Hash, DollarSign, AlertTriangle, FileText, Clock, CreditCard } from "lucide-react"

export function MetricsDashboardSection() {
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

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Hallucinations",
      description: "LLMs generate plausible but incorrect information. Without systematic evaluation, you can't quantify or reduce hallucination rates."
    },
    {
      icon: DollarSign,
      title: "Unpredictable Costs",
      description: "Token usage varies wildly across queries. Production costs can spiral without proper monitoring and optimization."
    },
    {
      icon: Clock,
      title: "Performance Issues",
      description: "Latency and throughput degrade under load. What works in testing often fails at scale."
    },
    {
      icon: FileText,
      title: "Lack of Observability",
      description: "You can't debug what you can't see. Traditional monitoring tools don't capture LLM-specific failures."
    }
  ]

  return (
    <Section size="lg" width="container" ref={sectionRef}>
      <FadeIn>
        <SectionHeader center>
          <SectionTitle>De-Risk AI in Production</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            The AI measurement problem: without proper evaluation and monitoring,
            you're deploying systems you can't truly control or improve.
          </SectionDescription>
        </SectionHeader>
      </FadeIn>

      <SectionContent>
        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-200">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <challenge.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {challenge.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Solution Statement */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Take Control of AI Complexity
          </h3>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We help you build the evaluation infrastructure, monitoring systems, and governance frameworks
            needed to deploy AI systems with confidence—not hope.
          </p>
        </div>
      </SectionContent>
    </Section>
  )
}