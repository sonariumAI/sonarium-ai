"use client"

import * as React from "react"
import { Linkedin, Mail, ArrowRight } from "lucide-react"

export function Footer() {

  const quickLinks = [
    { label: "Solutions", href: "/#solutions" },
    { label: "Expertise", href: "/#expertise" },
    { label: "Contact", href: "/#contact" }
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

          {/* Branding - Centered */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Sonarium AI
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Transforming LLM prototypes into enterprise-ready production systems.
              From evaluation to deployment, we make AI work in the real world.
            </p>
          </div>

          {/* Quick Links - Centered horizontal list */}
          <div className="mb-8">
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Centered */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="mailto:nicolas@sonarium.ai"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>nicolas@sonarium.ai</span>
            </a>
            <a
              href="https://www.linkedin.com/company/107914865"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
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