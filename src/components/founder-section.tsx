import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionContent } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Quote } from "lucide-react"

export function FounderSection() {
  return (
    <Section size="lg" width="container">
      <SectionHeader center>
        <SectionTitle>From Algorithm to Production System</SectionTitle>
      </SectionHeader>

      <SectionContent>
        <Card variant="elevated" className="max-w-4xl mx-auto overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left Column - Headshot */}
            <div className="flex flex-col items-center space-y-6">
              {/* Professional Headshot */}
              <div className="relative">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-4 border-primary/20 flex items-center justify-center overflow-hidden">
                  <img
                    src="/nicolas-debaene-headshot.jpg"
                    alt="Nicolas Debaene"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
              </div>

              {/* Name and Title */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Nicolas Debaene
                </h3>
                <p className="text-primary font-medium">
                  Founder & CEO, Sonarium AI
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Telecom ParisTech Graduate
                </p>
              </div>

              {/* LinkedIn Button */}
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary/50"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/nicolas-debaene-58462210a/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>

            {/* Right Column - Bio and Quote */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  With over <span className="font-semibold text-primary">10+ years</span> of experience
                  in AI and machine learning, Nicolas bridges the critical gap between cutting-edge research
                  and production-ready systems.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  A graduate of <span className="font-semibold">Telecom ParisTech</span>, one of France&apos;s
                  leading engineering schools, Nicolas has led AI initiatives at top-tier technology companies,
                  transforming experimental models into robust, scalable production systems.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  His expertise spans the entire ML lifecycle - from algorithm design and evaluation
                  frameworks to deployment architecture and governance protocols. Nicolas founded
                  Sonarium AI to solve the fundamental challenge that every enterprise faces:
                  making LLMs work reliably in production.
                </p>
              </div>

              {/* Quote */}
              <div className="relative p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-primary/30" />
                <blockquote className="text-lg italic text-foreground pl-8">
                  &ldquo;The difference between a demo and a production system isn&apos;t just code—it&apos;s
                  systematic evaluation, robust governance, and the discipline to build for reliability
                  over novelty.&rdquo;
                </blockquote>
                <cite className="block text-sm text-muted-foreground mt-3 pl-8">
                  — Nicolas Debaene, Founder of Sonarium AI
                </cite>
              </div>

              {/* Experience Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-xs text-muted-foreground">Years in AI</div>
                </div>
                <div className="text-center p-3 bg-card/50 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-secondary">100+</div>
                  <div className="text-xs text-muted-foreground">Models Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </SectionContent>
    </Section>
  )
}