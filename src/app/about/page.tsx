import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import ImpactBand from "@/components/ui/ImpactBand";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Forte Project is an independent, student-run initiative from Okemos, Michigan offering free virtual music lessons to K–12 students who can't afford private instruction.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Free music lessons, run by students."
        description="An independent, student-led group from Okemos, Michigan — here to make sure cost isn't the reason a student never gets to learn music."
      />
      <Story />
      <Values />
      <ImpactBand
        eyebrow="Get involved"
        actions={[
          { href: "/apply", label: "Sign up for lessons" },
          { href: "/volunteer", label: "Volunteer to teach" },
        ]}
      >
        Learn music, or teach it. Either way, it&apos;s free.
      </ImpactBand>
    </>
  );
}
