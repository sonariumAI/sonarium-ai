import dynamic from "next/dynamic";
import { HeroSection } from "@/components/hero-section";
import { LazySection } from "@/components/ui/lazy-section";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section, SectionHeader, SectionTitle, SectionDescription, SectionContent } from "@/components/ui/section";

// Lazy load heavy sections
const ProductionGapSection = dynamic(() => import("@/components/production-gap-section").then(mod => ({ default: mod.ProductionGapSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const MetricsDashboardSection = dynamic(() => import("@/components/metrics-dashboard-section").then(mod => ({ default: mod.MetricsDashboardSection })), {
  loading: () => <div className="h-96 animate-pulse bg-muted/10 rounded-lg" />
});

const FounderSection = dynamic(() => import("@/components/founder-section").then(mod => ({ default: mod.FounderSection })), {
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

      {/* Team - Founder Section */}
      <div id="team">
        <LazySection>
          <FounderSection />
        </LazySection>
      </div>

      {/* Production Gap Section */}
      <LazySection>
        <ProductionGapSection />
      </LazySection>

      {/* Metrics Dashboard Section */}
      <LazySection>
        <MetricsDashboardSection />
      </LazySection>

      {/* Contact Section */}
      <div id="contact">
        <LazySection>
          <ContactSection />
        </LazySection>
      </div>
    </div>
  );
}
