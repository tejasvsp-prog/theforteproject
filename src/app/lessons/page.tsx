import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImpactBand from "@/components/ui/ImpactBand";
import Faq from "@/components/home/Faq";
import { StaffDivider } from "@/components/decor/MusicArt";
import { steps, tracks } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lessons",
  description:
    "Free, virtual music lessons for K–12 students: 30 minutes, twice a month, taught one-on-one by student volunteers.",
  alternates: { canonical: "/lessons" },
};

const details = [
  ["Cost", "Free"],
  ["Length", "30 minutes"],
  ["Frequency", "Twice a month"],
  ["Format", "One-on-one, over video"],
] as const;

export default function LessonsPage() {
  return (
    <>
      <PageHero
        eyebrow="Lessons"
        title="How lessons work."
        description="One-on-one virtual lessons with a student volunteer, matched to what you want to learn."
      />

      {/* Program details — set like a concert program's fact table */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-3">
            <h2 className="t-kicker text-navy">The format</h2>
          </Reveal>
          <Reveal as="ul" className="lg:col-span-7">
            {details.map(([label, value]) => (
              <li
                key={label}
                className="grid grid-cols-[8rem_1fr] gap-6 border-t hairline py-4 first:border-t-2 first:border-t-ink sm:grid-cols-[11rem_1fr]"
              >
                <span className="t-body text-stone">{label}</span>
                <span className="t-h3">{value}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      <StaffDivider />

      {/* Matching */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <p className="t-kicker text-navy">Matching</p>
            <h2 className="t-h2 mt-5 max-w-[16ch]">
              You tell us what you want to learn. We find your teacher.
            </h2>
          </Reveal>
          <Reveal as="ol" className="lg:col-span-7 lg:col-start-6">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="grid gap-3 border-t hairline py-6 first:border-t-2 first:border-t-ink sm:grid-cols-[5rem_1fr] sm:gap-6"
              >
                <span className="font-display italic text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-h3">{s.title}</h3>
                  <p className="t-body mt-2 max-w-prose text-stone">{s.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tracks */}
      <section className="border-t hairline bg-surface">
        <div className="wrap py-16 md:py-24">
          <Reveal>
            <p className="t-kicker text-navy">Two tracks</p>
          </Reveal>
          <Reveal stagger className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-8">
            {tracks.map((track, i) => (
              <Reveal
                key={track.id}
                as="section"
                className={`border-t-2 border-ink pt-6 ${
                  i === 0 ? "lg:col-span-6" : "lg:col-span-5 lg:col-start-8"
                }`}
              >
                <p className="t-kicker text-stone">{track.label}</p>
                <h3 className="t-h2 mt-4">{track.title}</h3>
                <p className="t-body mt-4 max-w-prose text-stone">
                  {track.blurb}
                </p>
              </Reveal>
            ))}
          </Reveal>

          <Reveal className="mt-12 max-w-prose border-t hairline pt-6">
            <h3 className="t-h3">Which instruments?</h3>
            <p className="t-body mt-3 text-stone">
              It depends on our volunteers. Tell us what you play — or want to
              play — on the{" "}
              <Link href="/apply" className="link-rule !inline !pb-0.5">
                interest form
              </Link>{" "}
              and we&apos;ll match you with a teacher who can help.
            </p>
          </Reveal>
        </div>
      </section>

      <Faq />

      <ImpactBand
        eyebrow="Ready to start?"
        actions={[{ href: "/apply", label: "Sign up" }]}
      >
        Your first lesson is a short form away.
      </ImpactBand>
    </>
  );
}
