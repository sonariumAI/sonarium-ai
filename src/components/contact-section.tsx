"use client"

import * as React from "react"
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/ui/fade-in"
import { Card } from "@/components/ui/card"
import { Mail, Calendar } from "lucide-react"

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

  return (
    <Section size="lg" width="container" className="bg-gradient-to-b from-background to-card/30">
      <SectionHeader center>
        <FadeIn>
          <SectionTitle>Ready to Transform Your LLMs?</SectionTitle>
          <SectionDescription className="mx-auto max-w-3xl">
            Let&apos;s discuss how Sonarium AI can help you move from prototype to production.
            Book a free 90-minute audit or send us a message to get started.
          </SectionDescription>
        </FadeIn>
      </SectionHeader>

      <SectionContent>
        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.2}>
            <Card className="p-6 sm:p-8 lg:p-10 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Get in Touch
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tell us about your project and we&apos;ll get back to you within 2 business hours.
                </p>
              </div>

              {/* Contact Form */}
              <ContactForm />

              {/* Contact Methods - Below form */}
              <div className="mt-8 pt-8 border-t border-border/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-card/30 border border-border/30 hover:bg-card/50 hover:border-primary/30 transition-all duration-200 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground text-sm mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Privacy notice */}
              <p className="text-xs text-muted-foreground/70 text-center mt-6">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </Card>
          </FadeIn>
        </div>
      </SectionContent>
    </Section>
  )
}