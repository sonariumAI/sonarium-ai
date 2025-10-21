"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <AnimatedBackground className="min-h-[100vh] lg:min-h-[110vh] flex items-center justify-center pt-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40">

        <div className="text-center max-w-5xl mx-auto">
          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-[1.1] tracking-tight px-2">
            Your Next Production LLM,<br />
            <span className="bg-gradient-to-r from-primary via-cyan-400 to-secondary bg-clip-text text-transparent">
              Powered by AI Expertise
            </span>
          </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.4}>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-2">
            Deploy production-ready AI with confidence. Enterprise-grade{" "}
            <span className="text-primary font-semibold">evaluation</span>,{" "}
            <span className="text-secondary font-semibold">deployment</span>, and{" "}
            <span className="text-primary font-semibold">governance</span>—built in.
          </p>
          </FadeIn>

          {/* Founder Credibility */}
          <FadeIn delay={0.6}>
            <div className="flex items-center justify-center mb-8 sm:mb-12 px-4">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-gray-300">
                Founded by{" "}
                <span className="text-white font-semibold">Nicolas Debaene</span>,
                former AI research lead at top tech companies
              </span>
            </div>
          </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
            <Link href="/book-demo">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto min-h-[56px] px-8 text-lg"
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300 w-full sm:w-auto min-h-[56px] px-8 text-lg cursor-pointer"
              onClick={() => {
                // If we're not on the home page, navigate there first
                if (window.location.pathname !== '/') {
                  window.location.href = '/#solutions'
                  return
                }

                // Scroll to the section with retry logic
                const scrollToTarget = () => {
                  const target = document.querySelector('#solutions')
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    return true
                  }
                  return false
                }

                // Try immediately, then retry if not found
                if (!scrollToTarget()) {
                  setTimeout(scrollToTarget, 100)
                }
              }}
            >
              Discover Our Solutions
            </Button>
          </div>
          </FadeIn>
        </div>
      </div>
    </AnimatedBackground>
  )
}