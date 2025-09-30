"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LoadingSpinner } from "@/components/ui/loading"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

export function Footer() {
  const [email, setEmail] = React.useState("")
  const [isSubscribed, setIsSubscribed] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (email && !isLoading) {
      setIsLoading(true)

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      setIsSubscribed(true)
      setIsLoading(false)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Methodology", href: "#methodology" },
    { label: "Case Studies", href: "#case-studies" },
    { label: "Resources", href: "#resources" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" }
  ]

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ]

  return (
    <footer className="relative border-t border-border/50 bg-card/30 backdrop-blur-sm">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      {/* Main footer content */}
      <div className="relative">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

            {/* Branding Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Sonarium AI
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Transforming LLM prototypes into enterprise-ready production systems.
                  From evaluation to deployment, we make AI work in the real world.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href="mailto:nicolas@sonarium.ai"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    nicolas@sonarium.ai
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <a
                    href="https://linkedin.com/in/nicolas-debaene"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center group"
                    >
                      <span>{link.label}</span>
                      <ArrowRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Signup */}
            <div className="lg:col-span-2">
              <h4 className="text-lg font-semibold text-foreground mb-6">
                Stay Updated
              </h4>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                Get the latest insights on LLM production, case studies, and best practices
                delivered to your inbox.
              </p>

              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-card/80 border-border/50 focus:border-primary"
                  required
                />
                <Button
                  type="submit"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  disabled={isSubscribed || isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" variant="muted" />
                      Subscribing...
                    </>
                  ) : isSubscribed ? (
                    "Subscribed!"
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>

              {isSubscribed && (
                <p className="text-sm text-green-500 mt-3 animate-in fade-in slide-in-from-bottom-2">
                  ✓ Thank you for subscribing!
                </p>
              )}

              <p className="text-xs text-muted-foreground/70 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

              {/* Legal Links */}
              <div className="flex items-center space-x-6">
                {legalLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-xs text-muted-foreground">
                © 2025 Sonarium AI. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}