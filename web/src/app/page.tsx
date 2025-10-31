import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { JoinSection } from "@/components/home/join-section";
import { StatsSection } from "@/components/home/stats-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { UpcomingEventsSection } from "@/components/home/upcoming-events-section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISA - International Students Association | Ashesi University",
  description:
    "Join the International Students Association at Ashesi University. Connect with 500+ students from 30+ countries, attend 6+ events yearly, and find your home away from home in Ghana.",
  keywords: [
    "ISA",
    "International Students",
    "Ashesi University",
    "Ghana",
    "Student Community",
    "International Education",
    "African Universities",
    "Student Events",
  ],
  authors: [{ name: "ISA Ashesi" }],
  openGraph: {
    title: "ISA - International Students Association | Ashesi University",
    description:
      "Join our global community of 500+ international students from 30+ countries at Ashesi University.",
    type: "website",
    locale: "en_US",
    siteName: "ISA Ashesi",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISA - International Students Association",
    description: "Join our global community at Ashesi University",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function HomePage() {
  return (
    <main className="relative flex flex-col overflow-hidden">
      {/* Structured Content for SEO */}
      <article className="w-full">
        {/* Hero Section - Above the fold content */}
        <section aria-label="Hero" className="relative">
          <HeroSection />
        </section>

        {/* About Section */}
        <section aria-label="About ISA" className="relative">
          <AboutSection />
        </section>

        {/* Stats Section - Social Proof */}
        <section aria-label="Our Impact" className="relative">
          <StatsSection />
        </section>

        {/* Events Section */}
        <section aria-label="Upcoming Events" className="relative">
          <UpcomingEventsSection />
        </section>

        {/* Testimonials Section - Trust Building */}
        <section aria-label="Member Testimonials" className="relative">
          <TestimonialsSection />
        </section>

        {/* Join CTA Section */}
        <section aria-label="Join ISA" className="relative">
          <JoinSection />
        </section>
      </article>

      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "International Students Association - Ashesi University",
            alternateName: "ISA Ashesi",
            url: "https://isa-ashesi.com",
            logo: "https://isa-ashesi.com/logo.png",
            description:
              "The International Students Association at Ashesi University brings together students from over 40 countries to foster cross-cultural understanding and support.",
            foundingDate: "2010",
            address: {
              "@type": "PostalAddress",
              addressCountry: "GH",
              addressLocality: "Berekuso",
              addressRegion: "Eastern Region",
            },
            sameAs: [
              "https://www.facebook.com/ISAAshesi",
              "https://www.instagram.com/ISAAshesi",
              "https://twitter.com/ISAAshesi",
            ],
            memberOf: {
              "@type": "EducationalOrganization",
              name: "Ashesi University",
            },
          }),
        }}
      />
    </main>
  );
}
