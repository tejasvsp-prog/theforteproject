import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import RailSection from "@/components/ui/RailSection";
import ImpactBand from "@/components/ui/ImpactBand";
import GoogleFormEmbed from "@/components/ui/GoogleFormEmbed";
import ApplyOptions from "@/components/apply/ApplyOptions";

export const metadata: Metadata = {
  title: "Apply for Free Lessons",
  description:
    "Free virtual music lessons are available to underprivileged students worldwide — whether or not you have access to an instrument.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="For Students"
        title="Apply for free lessons."
        description="Free virtual lessons are available to underprivileged students everywhere. Choose the path that fits you — with or without an instrument."
      />

      <ApplyOptions />

      <RailSection
        id="performance"
        index="01"
        kicker="Performance Intake"
        title="Performance Lessons"
        lead="For students with access to an instrument who want individualized, performance-focused instruction."
        className="scroll-mt-20"
      >
        <div className="max-w-3xl">
          <GoogleFormEmbed formKey="performance" height={720} />
        </div>
      </RailSection>

      <RailSection
        id="theory"
        index="02"
        kicker="Theory Intake"
        title="Music Theory & Composition"
        lead="For students without an instrument — theory, composition, rhythm, and ear training."
        className="scroll-mt-20"
      >
        <div className="max-w-3xl">
          <GoogleFormEmbed formKey="theory" height={720} />
        </div>
      </RailSection>

      <ImpactBand eyebrow="Questions first?">
        Every student is welcome. Reach out and we will help you find your path.
      </ImpactBand>
    </>
  );
}
