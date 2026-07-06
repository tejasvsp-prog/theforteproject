import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImpactBand from "@/components/ui/ImpactBand";
import TallyEmbed from "@/components/ui/TallyEmbed";
import ApplyOptions from "@/components/apply/ApplyOptions";

export const metadata: Metadata = {
  title: "Sign up for lessons",
  description:
    "Free, virtual music lessons for K–12 students who can't afford private instruction. Fill out the interest form and a volunteer teacher reaches out.",
  alternates: { canonical: "/apply" },
};

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign up"
        title="Free lessons, for students who need them."
        description="Fill out the interest form below and one of our volunteer teachers will reach out to schedule. It's completely free — always."
      />

      <ApplyOptions />

      <section id="form" className="relative py-16 md:py-24 scroll-mt-20">
        <div className="wrap">
          <Reveal className="max-w-2xl">
            <p className="t-kicker text-accent">The interest form</p>
            <h2 className="t-h2 mt-5">One form — that&apos;s the whole start.</h2>
            <p className="t-lead mt-6 max-w-prose text-ink/75">
              Tell us a bit about you and whether you already have an instrument.
              A volunteer teacher takes it from there.
            </p>
          </Reveal>
          <Reveal className="mt-10 max-w-3xl">
            <TallyEmbed formKey="student" height={760} />
          </Reveal>
        </div>
      </section>

      <ImpactBand eyebrow="Not sure if it's for you?">
        If you&apos;re a student who can&apos;t afford lessons, you&apos;re
        exactly who we&apos;re here for.
      </ImpactBand>
    </>
  );
}
