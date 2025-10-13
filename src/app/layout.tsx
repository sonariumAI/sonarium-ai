import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { Analytics } from "@/components/analytics";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Sonarium AI | LLM Evaluation, Deployment & Governance",
    template: "%s | Sonarium AI"
  },
  description: "Deploy production-ready AI with confidence. Enterprise-grade evaluation, deployment, and governance—built in. Comprehensive LLM frameworks for Fortune 500 companies.",
  keywords: [
    "LLM evaluation",
    "AI deployment",
    "machine learning governance",
    "LLM production framework",
    "AI model evaluation",
    "enterprise AI deployment",
    "LLM optimization",
    "AI compliance framework",
    "model validation",
    "production AI systems"
  ],
  authors: [{ name: "Nicolas Debaene", url: "https://www.linkedin.com/in/nicolas-debaene-58462210a/" }],
  creator: "Sonarium AI",
  publisher: "Sonarium AI",
  category: "Technology",

  // Open Graph
  openGraph: {
    title: "Sonarium AI | LLM Evaluation, Deployment & Governance",
    description: "Transform your LLMs from demos to production with our enterprise framework. 50% cost reduction, 2x faster iteration, 99.9% uptime.",
    url: "https://sonarium.ai",
    siteName: "Sonarium AI",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sonarium AI - LLM Production Framework",
        type: "image/png",
      }
    ],
  },

  // Twitter
  twitter: {
    card: "summary_large_image",
    title: "Sonarium AI | LLM Evaluation, Deployment & Governance",
    description: "Transform your LLMs from demos to production. 50% cost reduction, 2x faster iteration.",
    site: "@sonariumai",
    creator: "@nicolasdebaene",
    images: ["/og-image.png"],
  },

  // Additional meta tags
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  manifest: "/manifest.json",

  // Verification
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },

  // Additional metadata
  alternates: {
    canonical: "https://sonarium.ai",
  },

  // App metadata
  applicationName: "Sonarium AI",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetBrainsMono.variable} antialiased`}
      >
        <Analytics />
        <StructuredData />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
