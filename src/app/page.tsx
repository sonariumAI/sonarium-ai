import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { LazySection } from "@/components/ui/lazy-section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section";

// Lazy load heavy sections
const ProductionGapSection = dynamic(() => import("@/components/production-gap-section").then(mod => ({ default: mod.ProductionGapSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const FourPillarsSection = dynamic(() => import("@/components/four-pillars-section").then(mod => ({ default: mod.FourPillarsSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const TimelineSection = dynamic(() => import("@/components/timeline-section").then(mod => ({ default: mod.TimelineSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const MetricsDashboardSection = dynamic(() => import("@/components/metrics-dashboard-section").then(mod => ({ default: mod.MetricsDashboardSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const CaseStudySection = dynamic(() => import("@/components/case-study-section").then(mod => ({ default: mod.CaseStudySection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const FounderSection = dynamic(() => import("@/components/founder-section").then(mod => ({ default: mod.FounderSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const PreFooterCtaSection = dynamic(() => import("@/components/pre-footer-cta-section").then(mod => ({ default: mod.PreFooterCtaSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const ContactSection = dynamic(() => import("@/components/contact-section").then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Production Gap Section */}
      <LazySection>
        <ProductionGapSection />
      </LazySection>

      {/* Four Pillars Section */}
      <LazySection>
        <FourPillarsSection />
      </LazySection>

      {/* Timeline Section */}
      <LazySection>
        <TimelineSection />
      </LazySection>

      {/* Metrics Dashboard Section */}
      <LazySection>
        <MetricsDashboardSection />
      </LazySection>

      {/* Case Study Section */}
      <LazySection>
        <CaseStudySection />
      </LazySection>

      {/* Founder Section */}
      <LazySection>
        <FounderSection />
      </LazySection>

      {/* Contact Section */}
      <LazySection>
        <ContactSection />
      </LazySection>

      {/* Pre-footer CTA Section */}
      <LazySection>
        <PreFooterCtaSection />
      </LazySection>

      {/* Features Section */}
      <Section size="lg" width="container">
        <SectionHeader center>
          <SectionTitle>Why Choose Sonarium AI</SectionTitle>
          <SectionDescription className="mx-auto">
            Enterprise-grade solutions for LLM evaluation, deployment, and governance
          </SectionDescription>
        </SectionHeader>
        <SectionContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded bg-primary"></div>
                </div>
                <CardTitle className="text-xl">Comprehensive Evaluation</CardTitle>
                <CardDescription>
                  Advanced testing frameworks to ensure your LLMs perform reliably across diverse real-world scenarios.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded bg-secondary"></div>
                </div>
                <CardTitle className="text-xl">Production Deployment</CardTitle>
                <CardDescription>
                  Seamless deployment pipelines with monitoring, scaling, and optimization for enterprise environments.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <div className="w-6 h-6 rounded bg-accent"></div>
                </div>
                <CardTitle className="text-xl">AI Governance</CardTitle>
                <CardDescription>
                  Complete governance frameworks ensuring compliance, security, and ethical AI practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </SectionContent>
      </Section>
    </div>
  );
}
