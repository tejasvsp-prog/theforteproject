import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import HowItWorks from "@/components/home/HowItWorks";
import StudentPrograms from "@/components/home/StudentPrograms";
import ImpactBanner from "@/components/home/ImpactBanner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  areaServed: "Worldwide",
  knowsAbout: [
    "Music education",
    "Music theory",
    "Composition",
    "Virtual lessons",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Mission />
      <HowItWorks />
      <StudentPrograms />
      <ImpactBanner />
    </>
  );
}
