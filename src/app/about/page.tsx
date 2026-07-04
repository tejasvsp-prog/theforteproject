import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import ImpactBand from "@/components/ui/ImpactBand";

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
        title="A student-led movement for musical access."
        description="The Forte Project expands access to quality music education worldwide — one free lesson at a time."
      />
      <Story />
      <Values />
      <ImpactBand
        eyebrow="Be part of the story"
        actions={[
          { href: "/volunteer", label: "Become a Volunteer" },
          { href: "/apply", label: "Enroll for Lessons" },
        ]}
      >
        Whether you teach or you learn, there is a place for you here.
      </ImpactBand>
    </>
  );
}
