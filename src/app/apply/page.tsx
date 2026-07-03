import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
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
        title="Apply for Free Lessons"
        description="Free virtual lessons are available to underprivileged students everywhere. Choose the path that fits you — whether or not you have an instrument."
      />

      <Section className="bg-cream">
        <ApplyOptions />
      </Section>

      <Section id="forms" className="bg-white" staff>
        <div className="flex flex-col items-center">
          <SectionHeading
            eyebrow="Application Forms"
            title="Start your application"
            description="Complete the form that matches your program. It only takes a few minutes."
          />
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-2">
          <Reveal id="performance-form" className="scroll-mt-28">
            <h3 className="mb-4 text-center font-serif text-xl text-navy">
              Performance Lessons
            </h3>
            <GoogleFormEmbed formKey="performance" height={720} />
          </Reveal>
          <Reveal id="theory-form" delay={0.1} className="scroll-mt-28">
            <h3 className="mb-4 text-center font-serif text-xl text-navy">
              Music Theory &amp; Composition
            </h3>
            <GoogleFormEmbed formKey="theory" height={720} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
