"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/ui/fade-in"
import { Card } from "@/components/ui/card"
import { Mail, Calendar, MapPin, Clock, Users, Zap } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch directly",
      value: "nicolas@sonarium.ai",
      href: "mailto:nicolas@sonarium.ai"
    },
    {
      icon: Calendar,
      title: "Free Audit",
      description: "90-minute assessment",
      value: "Book a call",
      href: "#"
    }
  ]

  const stats = [
    {
      icon: Clock,
      value: "< 2 hours",
      label: "Response time"
    },
    {
      icon: Users,
      value: "50+",
      label: "Enterprise clients"
    },
    {
      icon: Zap,
      value: "99.9%",
      label: "Success rate"
    }
  ]

  return (
    <Section size="lg" width="container" className="bg-gradient-to-b from-background to-card/30">
      <SectionHeader center>
        <FadeIn>
          <SectionTitle>Ready to Transform Your LLMs?</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            Let's discuss how Sonarium AI can help you move from prototype to production.
            Book a free 90-minute audit or send us a message to get started.
          </SectionDescription>
        </FadeIn>
      </SectionHeader>

      <SectionContent>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <FadeIn delay={0.2}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    Send us a message
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Tell us about your LLM project and we'll get back to you within 2 business hours.
                  </p>
                </div>
                <ContactForm />
              </Card>
            </FadeIn>
          </div>

          {/* Contact Info & Stats */}
          <div className="space-y-6">

            {/* Contact Methods */}
            <FadeIn delay={0.4}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Get in Touch
                </h3>
                {contactInfo.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card/30 border-border/30 hover:bg-card/50 transition-all duration-200 hover:scale-[1.02]"
                  >
                    <a
                      href={item.href}
                      className="flex items-start space-x-3 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          {item.description}
                        </p>
                        <p className="text-sm text-foreground font-medium">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>
            </FadeIn>

            {/* Stats */}
            <FadeIn delay={0.6}>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Why Choose Us
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <stat.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-foreground">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Office Info */}
            <FadeIn delay={0.8}>
              <Card className="p-4 bg-card/30 border-border/30">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">
                      Global Reach
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Serving enterprise clients worldwide with remote-first expertise
                    </p>
                  </div>
                </div>
              </Card>
            </FadeIn>

            {/* Call to Action */}
            <FadeIn delay={1.0}>
              <div className="p-4 rounded-lg bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">
                  Ready for a Free Audit?
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Get a comprehensive 90-minute assessment of your LLM production readiness.
                </p>
                <a
                  href="mailto:nicolas@sonarium.ai?subject=Free%20Production%20Readiness%20Audit"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  Schedule your audit →
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}