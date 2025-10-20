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
      example: "Your medical Q&A bot tells a patient that ibuprofen is safe with warfarin. The response sounds confident, cites realistic medical terminology, and passes all your regex checks. Three weeks later, you discover 12% of drug interaction queries contain dangerous errors.",
      bullets: {
        title: "What You Can&apos;t Answer:",
        items: [
          "What&apos;s our baseline hallucination rate across different query types?",
          "Which prompt changes actually reduced errors vs. just changed the error mode?",
          "Are hallucinations clustered in specific domains or edge cases?",
          "How do we catch subtle factual errors that sound completely plausible?"
        ]
      }
    },
    {
      icon: DollarSign,
      title: "Unpredictable Costs",
      description: "Token usage varies wildly across queries. Production costs can spiral without proper monitoring and optimization.",
      example: "Your customer service bot&apos;s monthly bill jumps from $15K to $68K. Turns out 3% of queries trigger a pathological case where the model generates massive context windows. A single user&apos;s conversation thread consumed $2,400 in tokens across 40 messages.",
      bullets: {
        title: "Hidden Cost Drivers:",
        items: [
          "Which users, query patterns, or features are driving 80% of token spend?",
          "Are we paying for redundant context or unnecessarily long outputs?",
          "What&apos;s the ROI on expensive models vs. cheaper alternatives for each use case?",
          "How much are we spending on requests that users immediately discard?"
        ]
      }
    },
    {
      icon: Clock,
      title: "Performance Issues",
      description: "Latency and throughput degrade under load. What works in testing often fails at scale.",
      example: "At 3PM daily, your document summarization feature slows to a crawl. P95 latency hits 45 seconds. 40% of requests time out. Users start complaining. Your metrics show &apos;API healthy&apos; because you&apos;re only tracking response codes, not actual user experience or LLM-specific bottlenecks.",
      bullets: {
        title: "What Traditional Monitoring Misses:",
        items: [
          "LLM-specific latency patterns (time-to-first-token vs. total generation time)",
          "Token throughput degradation under concurrent load",
          "Context window exhaustion causing cascading failures",
          "Rate limit interactions across multiple models/providers"
        ]
      }
    },
    {
      icon: FileText,
      title: "Lack of Observability",
      description: "You can&apos;t debug what you can&apos;t see. Traditional monitoring tools don&apos;t capture LLM-specific failures.",
      example: "Users report that your code review assistant &apos;got worse&apos; after a deployment. Your logs show 200 OK responses. Your metrics look fine. But you have no way to compare output quality, prompt effectiveness, or model behavior before and after the change. You&apos;re debugging blind.",
      bullets: {
        title: "What Traditional Monitoring Misses:",
        items: [
          "Prompt template performance across different model versions",
          "Output quality drift as user behavior evolves",
          "Which RAG retrievals are actually being used vs. ignored by the model",
          "Chain-of-thought reasoning failures that produce wrong answers with high confidence"
        ]
      }
    }
  ]

  return (
    <Section size="lg" width="container" ref={sectionRef}>
      <FadeIn>
        <SectionHeader center>
          <SectionTitle>De-Risk AI in Production</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
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