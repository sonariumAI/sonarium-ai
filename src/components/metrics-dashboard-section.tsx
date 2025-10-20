"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"
import { DollarSign, AlertTriangle, FileText, Clock } from "lucide-react"

export function MetricsDashboardSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Hallucinations",
      description: "LLMs generate plausible but incorrect information. Without systematic evaluation, you can&apos;t quantify or reduce hallucination rates.",
      example: "A US healthcare platform (Q2 2024) discovered 12% of drug interaction queries contained factual errors post-launch. A European fintech (Sept 2024) found their model cited non-existent regulatory filings in 8% of compliance responses. Both passed initial testing.",
      bullets: {
        title: "What we measure:",
        items: [
          "Factual accuracy rate by domain (medical, legal, financial)",
          "Hallucination frequency per 1K responses",
          "Source attribution accuracy for RAG systems",
          "Confidence calibration (does stated confidence match actual accuracy)"
        ]
      }
    },
    {
      icon: DollarSign,
      title: "Unpredictable Costs",
      description: "Token usage varies wildly across queries. Production costs can spiral without proper monitoring and optimization.",
      example: "A B2B SaaS platform (Aug 2024) saw inference costs jump from $18K to $71K monthly when users began uploading PDFs. An Asia-Pacific legal tech company found 3% of queries consumed 47% of their token budget due to unnecessarily long context windows.",
      bullets: {
        title: "What we measure:",
        items: [
          "Cost per request by endpoint and user segment",
          "Input/output token distribution (P50, P95, P99)",
          "Context window utilization and waste",
          "Model routing efficiency (expensive vs. cheaper model performance)",
          "Cost per successful outcome (not just per API call)"
        ]
      }
    },
    {
      icon: Clock,
      title: "Performance Issues",
      description: "Latency and throughput degrade under load. What works in testing often fails at scale.",
      example: "A document processing company (Jul 2024) saw throughput drop from 120 docs/hour to 18 docs/hour at scale. A financial services firm experienced P95 latency of 52 seconds during market hours while standard monitoring reported &apos;healthy&apos; status—they only tracked HTTP response codes.",
      bullets: {
        title: "What we measure:",
        items: [
          "Time-to-first-token (TTFT) and generation throughput",
          "P50/P95/P99 latency by time of day and load",
          "Queue depth and request abandonment rate",
          "Throughput degradation under concurrent load"
        ]
      }
    },
    {
      icon: FileText,
      title: "Lack of Observability",
      description: "You can&apos;t debug what you can&apos;t see. Traditional monitoring tools don&apos;t capture LLM-specific failures.",
      example: "A North American healthtech (Oct 2024) saw clinician satisfaction drop 22% after a model update. Logs showed 99.7% successful responses. A UK legal platform couldn&apos;t determine why output quality degraded—they had no systematic comparison across prompt versions or model releases.",
      bullets: {
        title: "What we measure:",
        items: [
          "Output quality scores (ROUGE, semantic similarity, task-specific)",
          "Prompt effectiveness across model versions",
          "RAG retrieval precision and model utilization rate",
          "Reasoning chain quality and intermediate step accuracy"
        ]
      }
    }
  ]

  return (
    <Section size="lg" width="container" ref={sectionRef} className="bg-gradient-to-b from-background to-gray-900/20">
      <FadeIn>
        <SectionHeader center>
          <SectionTitle className="text-white">De-Risk AI in Production</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl text-gray-300">
            The AI measurement problem: without proper evaluation and monitoring,
            you&apos;re deploying systems you can&apos;t truly control or improve.
          </SectionDescription>
        </SectionHeader>
      </FadeIn>

      <SectionContent>
        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {challenges.map((challenge, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <div className="p-6 rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-200">
                <div className="flex items-start space-x-4 mb-4">
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

                {/* Real Example */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-xs font-semibold text-primary mb-2">Real Example:</p>
                  <p className="text-sm text-muted-foreground/90 leading-relaxed italic">
                    {challenge.example}
                  </p>
                </div>

                {/* Bullet Points */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-xs font-semibold text-primary mb-3">{challenge.bullets.title}</p>
                  <ul className="space-y-2">
                    {challenge.bullets.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="flex-1">{item}</span>
                      </li>
                    ))}
                  </ul>
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