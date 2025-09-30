"use client"

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { FadeIn } from "@/components/ui/fade-in"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  return (
    <AnimatedBackground className="min-h-screen flex items-center pt-16">
      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
            Your LLMs Work in{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Demos
            </span>
            .<br />
            We Make Them Work in{" "}
            <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Production
            </span>
            .
          </h1>
          </FadeIn>

          {/* Subheading */}
          <FadeIn delay={0.4}>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your Large Language Models from promising prototypes to
            enterprise-ready solutions with comprehensive{" "}
            <span className="text-primary font-semibold">evaluation</span>,{" "}
            <span className="text-secondary font-semibold">deployment</span>, and{" "}
            <span className="text-primary font-semibold">governance</span> frameworks.
          </p>
          </FadeIn>

          {/* Founder Credibility */}
          <FadeIn delay={0.6}>
            <div className="flex items-center justify-center space-x-3 mb-12">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span className="text-sm text-gray-300">
                Founded by{" "}
                <span className="text-white font-semibold">Nicolas Debaene</span>,
                former AI research lead at top tech companies
              </span>
            </div>
          </div>
          </FadeIn>

          {/* CTA Buttons */}
          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              Start Your Evaluation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm transition-all duration-300"
            >
              See Our Approach
            </Button>
          </div>
          </FadeIn>

          {/* Trust Indicators */}
          <FadeIn delay={1.0}>
            <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-sm text-gray-400 mb-6">
              Trusted by AI teams at leading companies
            </p>
            <div className="flex items-center justify-center space-x-8 opacity-50">
              {/* Placeholder for company logos */}
              <div className="w-24 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs text-gray-400">Logo</span>
              </div>
              <div className="w-24 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs text-gray-400">Logo</span>
              </div>
              <div className="w-24 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs text-gray-400">Logo</span>
              </div>
              <div className="w-24 h-12 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs text-gray-400">Logo</span>
              </div>
            </div>
          </div>
        </div>
          </FadeIn>
        </div>
      </motion.div>
    </AnimatedBackground>
  )
}