import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { TimelineItem } from "@/components/ui/timeline-item"
import { Search, Wrench, CheckCircle, TrendingUp } from "lucide-react"

export function TimelineSection() {
  const timelinePhases = [
    {
      icon: Search,
      week: "Week 1",
      title: "Production Readiness Audit",
      description: "Comprehensive assessment of your current LLM infrastructure, identifying gaps, risks, and optimization opportunities through systematic evaluation of your models, deployment architecture, and operational processes.",
      deliverables: [
        "Complete infrastructure assessment report",
        "Risk analysis and gap identification",
        "Performance baseline measurements",
        "Security and compliance evaluation",
        "Cost analysis and optimization roadmap",
        "Detailed improvement recommendations"
      ],
      variant: "primary" as const
    },
    {
      icon: Wrench,
      week: "Week 2-3",
      title: "Framework Implementation",
      description: "Deploy and configure our comprehensive production framework, including evaluation systems, monitoring infrastructure, governance protocols, and optimization tools tailored to your specific requirements.",
      deliverables: [
        "Evaluation framework deployment",
        "Production monitoring setup",
        "Governance protocol implementation",
        "Cost optimization system installation",
        "Custom integration development",
        "Team training and documentation",
        "Initial framework testing and validation"
      ],
      variant: "secondary" as const
    },
    {
      icon: CheckCircle,
      week: "Week 4",
      title: "Validation & Tuning",
      description: "Rigorous testing and fine-tuning of all implemented systems, ensuring optimal performance, reliability, and integration with your existing infrastructure while meeting all compliance requirements.",
      deliverables: [
        "End-to-end system validation",
        "Performance optimization and tuning",
        "Integration testing with existing systems",
        "Compliance verification and certification",
        "Load testing and scalability validation",
        "Final security audit and approval"
      ],
      variant: "accent" as const
    },
    {
      icon: TrendingUp,
      week: "Week 5+",
      title: "Continuous Optimization",
      description: "Ongoing monitoring, optimization, and enhancement of your production systems with regular performance reviews, proactive issue resolution, and continuous improvement based on real-world usage patterns.",
      deliverables: [
        "24/7 monitoring and alerting",
        "Monthly performance reviews",
        "Continuous cost optimization",
        "Regular system updates and patches",
        "Proactive issue identification and resolution",
        "Quarterly strategic planning sessions",
        "Ongoing team support and training"
      ],
      variant: "default" as const
    }
  ]

  return (
    <Section size="lg" width="container">
      <SectionHeader center>
        <SectionTitle>Your Path to Production Excellence</SectionTitle>
        <SectionDescription className="mx-auto max-w-3xl">
          Our proven 5-week methodology transforms your LLM prototypes into enterprise-ready
          production systems with measurable outcomes and continuous improvement.
        </SectionDescription>
      </SectionHeader>

      <SectionContent>
        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {timelinePhases.map((phase, index) => (
            <TimelineItem
              key={index}
              icon={phase.icon}
              week={phase.week}
              title={phase.title}
              description={phase.description}
              deliverables={phase.deliverables}
              variant={phase.variant}
              isLast={index === timelinePhases.length - 1}
            />
          ))}
        </div>

        {/* Timeline Summary */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-sm text-muted-foreground">Week Audit</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-secondary mb-2">2-3</div>
            <div className="text-sm text-muted-foreground">Weeks Implementation</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-accent mb-2">1</div>
            <div className="text-sm text-muted-foreground">Week Validation</div>
          </div>
          <div className="text-center p-6 rounded-xl bg-card/50 border border-border/50">
            <div className="text-3xl font-bold text-primary mb-2">∞</div>
            <div className="text-sm text-muted-foreground">Continuous Optimization</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center space-x-4 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="text-left">
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Ready to Start Your Transformation?
              </h3>
              <p className="text-sm text-muted-foreground">
                Schedule your Production Readiness Audit and take the first step
                toward enterprise-grade LLM deployment.
              </p>
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}