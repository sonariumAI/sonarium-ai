"use client"

import * as React from "react"
import { Section, SectionContent } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, Download } from "lucide-react"

export function PreFooterCtaSection() {
  return (
    <Section size="lg" width="container">
      <SectionContent>
        {/* Main CTA Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Background gradient with animation */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-primary/10 rounded-3xl blur-2xl opacity-60" />

          {/* Main card */}
          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/80 backdrop-blur-xl shadow-2xl">
            {/* Animated background orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-primary/20 to-transparent rounded-full blur-3xl opacity-40" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl opacity-40" />

            {/* Content */}
            <div className="relative p-8 md:p-16">
              {/* Headline */}
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                  Ready to Move from{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Demo to Production
                  </span>
                  ?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Transform your LLM prototypes into enterprise-ready production systems
                  with our proven 5-week framework.
                </p>
              </div>

              {/* CTA Options */}
              <div className="max-w-xl mx-auto mb-12">
                {/* Get Framework */}
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-8 rounded-2xl border border-secondary/20 bg-card/50 backdrop-blur-sm group-hover:border-secondary/40 transition-all duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg">
                        <Download className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Get Framework
                        </h3>
                        <p className="text-sm text-secondary font-semibold uppercase tracking-wider">
                          Implementation Guide
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Complete production checklist</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Evaluation templates & scripts</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span>Deployment best practices</span>
                      </li>
                    </ul>

                    <Button
                      size="lg"
                      variant="outline"
                      className="w-full group/btn border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10 text-secondary hover:text-secondary transition-all duration-300"
                    >
                      Download Framework
                      <Download className="ml-2 h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center space-y-4 max-w-xl mx-auto">
                  <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-card/60 border border-border/30 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Questions? Contact us directly at{" "}
                      <a
                        href="mailto:nicolas@sonarium.ai"
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        nicolas@sonarium.ai
                      </a>
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground/70">
                    Typical response time: Under 2 hours during business days
                  </p>
                </div>
              </div>
            </div>

            {/* Shine effect */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}