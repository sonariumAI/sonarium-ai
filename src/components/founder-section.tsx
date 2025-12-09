"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionContent } from "@/components/ui/section"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Quote } from "lucide-react"

export function FounderSection() {
  return (
    <Section id="expertise" size="lg" width="container">
      <SectionHeader center>
        <SectionTitle>Who You&apos;ll Work With</SectionTitle>
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

              {/* Previously at */}
              <div className="mt-4 pt-4 border-t border-border/30 flex-1 flex flex-col">
                <p className="text-xs text-muted-foreground text-center mb-3">Previously at</p>
                <div className="flex flex-col items-center justify-around flex-1 py-2">
                  <div className="px-6 py-3">
                    <img
                      src="/logos/toptal.png"
                      alt="Toptal"
                      className="h-10 w-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-sm font-semibold text-foreground/70 px-3 py-1">Toptal</div>';
                      }}
                    />
                  </div>
                  <div className="px-6 py-3">
                    <img
                      src="/logos/rappi.png"
                      alt="Rappi"
                      className="h-10 w-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-sm font-semibold text-foreground/70 px-3 py-1">Rappi</div>';
                      }}
                    />
                  </div>
                  <div className="px-6 py-3">
                    <img
                      src="/logos/bnp-paribas.png"
                      alt="BNP Paribas"
                      className="h-10 w-auto"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-sm font-semibold text-foreground/70 px-3 py-1">BNP Paribas</div>';
                      }}
                    />
                  </div>
                  <div className="px-6 py-3">
                    <img
                      src="/logos/cebuana-lhuillier.png"
                      alt="Cebuana Lhuillier"
                      className="h-10 w-auto"
                      style={{ filter: 'hue-rotate(180deg) saturate(1.5) brightness(1.3)' }}
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = '<div class="text-sm font-semibold text-foreground/70 px-3 py-1">Cebuana Lhuillier</div>';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Bio and Quote */}
            <div className="space-y-6">
              {/* Bio */}
              <div className="space-y-4">
                <p className="text-foreground leading-relaxed">
                  With over <span className="font-semibold text-primary">10+ years</span> building
                  ML systems for operational decisions—forecasting, optimization, and decision support
                  in finance, logistics, and industrial operations.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  A graduate of <span className="font-semibold">Telecom ParisTech</span>, Nicolas has
                  built production ML systems at BNP Paribas (quantitative finance), Rappi (logistics optimization),
                  and for industrial clients across Latin America and Europe.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  He founded Sonarium AI to work on the problems he finds most interesting:
                  complex operational decisions where better forecasting and optimization
                  translate directly into measurable business outcomes.
                </p>
              </div>

              {/* Quote */}
              <div className="relative p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <Quote className="absolute top-4 left-4 w-6 h-6 text-primary/30" />
                <blockquote className="text-lg italic text-foreground pl-8">
                  &ldquo;The best ML systems aren&apos;t the most sophisticated—they&apos;re the ones
                  that operators actually trust and use. That means explainability, reliability,
                  and integration with how decisions are really made.&rdquo;
                </blockquote>
                <cite className="block text-sm text-muted-foreground mt-3 pl-8">
                  — Nicolas Debaene, Founder of Sonarium AI
                </cite>
              </div>

            </div>
          </div>
        </Card>
      </SectionContent>
    </Section>
  )
}