"use client"

import * as React from "react"
import Link from "next/link"
import { Section, SectionContent } from "@/components/ui/section"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function PreFooterCtaSection() {
  return (
    <Section size="lg" width="container">
      <SectionContent>
        {/* Main CTA Container */}
        <div className="relative max-w-4xl mx-auto">
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
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Ready to Improve Your{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Forecasting & Optimization
                  </span>
                  ?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  We start with a focused conversation about your current decision-making processes,
                  data infrastructure, and where better forecasting could move the needle.
                </p>
              </div>

              {/* Single CTA */}
              <div className="text-center mb-10">
                <Link href="/book-demo">
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 min-h-[56px] px-10 text-lg"
                  >
                    Schedule a Call
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>

              {/* Contact Information */}
              <div className="text-center">
                <div className="inline-flex flex-col items-center space-y-4 max-w-xl mx-auto">
                  <div className="flex items-center space-x-3 px-6 py-3 rounded-full bg-card/60 border border-border/30 backdrop-blur-sm">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm text-muted-foreground">
                      Or email directly:{" "}
                      <a
                        href="mailto:nicolas@sonarium.ai"
                        className="text-primary hover:text-primary/80 font-medium transition-colors"
                      >
                        nicolas@sonarium.ai
                      </a>
                    </span>
                  </div>
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