import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import StudentPrograms from "@/components/home/StudentPrograms";
import HowItWorks from "@/components/home/HowItWorks";
import VolunteerNote from "@/components/home/VolunteerNote";
import ImpactBanner from "@/components/home/ImpactBanner";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  areaServed: { "@type": "Country", name: "United States" },
  location: {
    "@type": "Place",
    address: { "@type": "PostalAddress", addressLocality: "Okemos", addressRegion: "MI", addressCountry: "US" },
  },
  knowsAbout: ["Music education", "Music theory", "Music composition"],
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
      <StudentPrograms />
      <HowItWorks />
      <VolunteerNote />
      <ImpactBanner />
    </>
  );
}
