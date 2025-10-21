"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { FadeIn } from "@/components/ui/fade-in"
import { Button } from "@/components/ui/button"
import { DollarSign, AlertTriangle, FileText, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export function MetricsDashboardSection() {
  const sectionRef = React.useRef<HTMLDivElement>(null)

  const challenges = [
    {
      icon: AlertTriangle,
      title: "Hallucinations",
      description: "Your model sounds confident. But is it accurate?",
      example: "Healthcare platform: 12% of drug interaction queries had factual errors. Fintech: 8% cited non-existent regulations. Both passed testing.",
      bullets: [
        "Factual accuracy by domain",
        "Hallucination rate per 1K responses",
        "RAG source attribution accuracy",
        "Confidence vs. actual accuracy"
      ],
      cta: "Assess your hallucination risk"
    },
    {
      icon: DollarSign,
      title: "Unpredictable Costs",
      description: "Token costs can spiral from $18K to $71K overnight.",
      example: "B2B SaaS: Costs jumped 4x when users uploaded PDFs. Legal tech: 3% of queries ate 47% of budget.",
      bullets: [
        "Which 5% of requests drive 50% of costs",
        "P95 token usage vs. P50",
        "Context waste analysis",
        "Cheaper model opportunities"
      ],
      cta: "Get a cost analysis"
    },
    {
      icon: Clock,
      title: "Performance at Scale",
      description: "120 docs/hour in testing. 18 docs/hour in production.",
      example: "Document processor: 85% throughput drop at scale. Finance firm: 52s P95 latency during peak hours.",
      bullets: [
        "Time-to-first-token under load",
        "P95/P99 latency patterns",
        "Request abandonment rate",
        "Concurrent load impact"
      ],
      cta: "Benchmark your system"
    },
    {
      icon: FileText,
      title: "Invisible Failures",
      description: "99.7% successful responses. 22% drop in user satisfaction.",
      example: "Healthtech: Quality tanked after update but logs looked fine. Legal: Couldn't trace output degradation.",
      bullets: [
        "Output quality tracking",
        "Prompt version comparison",
        "RAG retrieval effectiveness",
        "Reasoning chain analysis"
      ],
      cta: "Set up proper monitoring"
    }
  ]

  return (
    <Section id="solutions" size="lg" width="container" ref={sectionRef} className="bg-gradient-to-b from-background to-gray-900/20">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {challenges.map((challenge, index) => (
            <FadeIn key={index} delay={0.2 + index * 0.1} direction="up">
              <div className="group p-8 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col h-full">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <challenge.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {challenge.title}
                    </h3>
                    <p className="text-base text-gray-300 leading-snug font-medium">
                      {challenge.description}
                    </p>
                  </div>
                </div>

                {/* Real Example */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Real Impact</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {challenge.example}
                  </p>
                </div>

                {/* What We Measure */}
                <div className="mt-5 pt-5 border-t border-border/30 flex-1">
                  <p className="text-xs font-bold text-gray-300 mb-3 uppercase tracking-wider">What We Measure</p>
                  <ul className="space-y-2.5">
                    {challenge.bullets.map((item, i) => (
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

        {/* Solution Statement */}
        <FadeIn delay={0.6}>
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-2xl p-10 text-center">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stop Guessing. Start Measuring.
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
                We build the evaluation systems, monitoring infrastructure, and governance frameworks
                you need to ship AI with confidence.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="group font-semibold">
                  Get Your Free AI Risk Assessment
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