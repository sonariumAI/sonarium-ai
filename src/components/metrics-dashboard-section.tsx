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

  const metrics = [
    {
      icon: Hash,
      title: "Tokens per Request",
      beforeValue: 2847,
      afterValue: 1923,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 0,
        separator: ","
      },
      variant: "reduction" as const
    },
    {
      icon: DollarSign,
      title: "Cost per 1K Requests",
      beforeValue: 12.45,
      afterValue: 4.83,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 2,
        prefix: "$"
      },
      variant: "reduction" as const
    },
    {
      icon: AlertTriangle,
      title: "Hallucination Rate",
      beforeValue: 23.7,
      afterValue: 4.2,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 1,
        suffix: "%"
      },
      variant: "reduction" as const
    },
    {
      icon: FileText,
      title: "Citation Coverage",
      beforeValue: 34.8,
      afterValue: 91.3,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 1,
        suffix: "%"
      },
      variant: "improvement" as const
    },
    {
      icon: Clock,
      title: "P95 Latency",
      beforeValue: 3240,
      afterValue: 847,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 0,
        suffix: "ms",
        separator: ","
      },
      variant: "reduction" as const
    },
    {
      icon: CreditCard,
      title: "Monthly GPU Spend",
      beforeValue: 45780,
      afterValue: 12340,
      beforeLabel: "Original",
      afterLabel: "Optimized",
      valueProps: {
        decimals: 0,
        prefix: "$",
        separator: ","
      },
      variant: "reduction" as const
    }
  ]

  return (
    <Section size="lg" width="container" ref={sectionRef}>
      <FadeIn>
        <SectionHeader center>
          <SectionTitle>Measurable Production Impact</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            Real metrics from our enterprise clients show dramatic improvements across
            all key performance indicators after implementing our production framework.
          </SectionDescription>
        </SectionHeader>
      </FadeIn>

      <SectionContent>
        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {metrics.map((metric, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <MetricCard
                icon={metric.icon}
                title={metric.title}
                beforeValue={metric.beforeValue}
                afterValue={metric.afterValue}
                beforeLabel={metric.beforeLabel}
                afterLabel={metric.afterLabel}
                valueProps={metric.valueProps}
                variant={metric.variant}
                isVisible={isVisible}
                className="h-full"
              />
            </FadeIn>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Average Client Improvements
            </h3>
            <p className="text-sm text-muted-foreground">
              Across all our enterprise deployments
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-500 mb-1">73%</div>
              <div className="text-xs text-muted-foreground">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-500 mb-1">84%</div>
              <div className="text-xs text-muted-foreground">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-500 mb-1">91%</div>
              <div className="text-xs text-muted-foreground">Less Hallucinations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-500 mb-1">156%</div>
              <div className="text-xs text-muted-foreground">Better Coverage</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col items-center space-y-4 max-w-xl mx-auto">
            <h3 className="text-lg font-semibold text-foreground">
              Want to See These Results for Your LLMs?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Our Production Readiness Audit will show you exactly where your current
              implementation stands and how we can achieve similar improvements.
            </p>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}