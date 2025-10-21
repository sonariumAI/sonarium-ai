import { HeroSection } from "@/components/hero-section";
import { MetricsDashboardSection } from "@/components/metrics-dashboard-section";
import { FounderSection } from "@/components/founder-section";
import { ContactSection } from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Team - Founder Section */}
      <FounderSection />

      {/* Metrics Dashboard Section */}
      <MetricsDashboardSection />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
