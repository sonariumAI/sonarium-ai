"use client"

import Script from "next/script"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sonarium AI",
    url: "https://sonarium.ai",
    logo: "https://sonarium.ai/logo.png",
    description: "Transform your Large Language Models from promising prototypes to enterprise-ready production systems with comprehensive evaluation, deployment, and governance frameworks.",
    foundingDate: "2024",
    founder: {
      "@type": "Person",
      name: "Nicolas Debaene",
      url: "https://linkedin.com/in/nicolas-debaene",
      jobTitle: "Founder & CEO"
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "US"
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "nicolas@sonarium.ai",
      contactType: "customer service"
    },
    sameAs: [
      "https://linkedin.com/company/sonarium-ai",
      "https://twitter.com/sonariumai"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "LLM Production Framework",
    provider: {
      "@type": "Organization",
      name: "Sonarium AI"
    },
    description: "Comprehensive LLM evaluation, deployment optimization, and AI governance frameworks for enterprise clients.",
    serviceType: "AI/ML Consulting",
    areaServed: "Worldwide",
    audience: {
      "@type": "Audience",
      audienceType: "Enterprise"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Sonarium AI",
    url: "https://sonarium.ai",
    description: "LLM Evaluation, Deployment & Governance platform for enterprise AI systems",
    publisher: {
      "@type": "Organization",
      name: "Sonarium AI"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://sonarium.ai/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sonarium.ai"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is LLM production deployment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LLM production deployment involves transforming experimental language models into enterprise-ready systems with proper evaluation, monitoring, optimization, and governance frameworks."
        }
      },
      {
        "@type": "Question",
        name: "How does Sonarium AI help with LLM evaluation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We provide comprehensive evaluation frameworks including coverage scoring, hallucination detection, performance metrics, and validation testing to ensure your LLMs meet production standards."
        }
      },
      {
        "@type": "Question",
        name: "What results can I expect from the Sonarium AI framework?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our clients typically see 50% cost reduction, 2x faster iteration speed, 99.9% uptime, and significant improvements in model accuracy and reliability."
        }
      }
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
    </>
  )
}