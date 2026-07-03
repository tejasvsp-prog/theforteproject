import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import CTABand from "@/components/ui/CTABand";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The Forte Project is a student-led nonprofit expanding access to quality music education worldwide through free virtual lessons.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="About Us"
        description="The Forte Project is a student-led initiative expanding access to quality music education worldwide — one free lesson at a time."
      />
      <Story />
      <Values />
      <CTABand
        title="Be part of the story"
        description="Whether you teach or you learn, there's a place for you at The Forte Project."
        actions={[
          { href: "/volunteer", label: "Become a Volunteer", variant: "gold" },
          { href: "/apply", label: "Enroll for Lessons", variant: "ghost" },
        ]}
      />
    </>
  );
}
