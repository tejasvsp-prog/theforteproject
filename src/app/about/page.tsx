import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ImpactBand from "@/components/ui/ImpactBand";
import { StaffDivider } from "@/components/decor/MusicArt";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Forte Project is an independent, student-run organization in Okemos, Michigan providing free virtual music lessons to K–12 students.",
  alternates: { canonical: "/about" },
};

const sections = [
  {
    heading: "Who we are",
    body: "The Forte Project is an independent, student-run organization founded by high school students in Okemos, Michigan. Every teacher is a high school volunteer — at least a sophomore, and a member of their school's highest ensemble.",
    link: null,
  },
  {
    heading: "Why we exist",
    body: "Private music lessons are expensive, and cost keeps many students from learning. We exist to remove that barrier: every lesson we teach is free.",
    link: null,
  },
  {
    heading: "How lessons work",
    body: "Students fill out an interest form and a volunteer teacher reaches out to schedule. Lessons are one-on-one, 30 minutes, twice a month, over video — instrument lessons for students who already play, or theory and composition for those without an instrument.",
    link: { href: "/lessons", label: "About lessons" },
  },
  {
    heading: "Where we are today",
    body: "We're a young organization, and honest about it: fully virtual today, with plans for in-person lessons, group workshops, and community events as we grow.",
    link: null,
  },
  {
    heading: "Leadership",
    body: "The Forte Project is led by its student founders. Leadership profiles are coming soon.",
    link: null,
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Free music lessons, run by students."
        description={`An independent, student-led organization from ${siteConfig.location}.`}
      />

      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7 lg:col-start-4">
            {sections.map((s) => (
              <Reveal
                key={s.heading}
                as="section"
                className="border-t hairline py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <h2 className="t-h2">{s.heading}</h2>
                <p className="t-body mt-4 max-w-prose text-stone">{s.body}</p>
                {s.link ? (
                  <Link href={s.link.href} className="link-rule mt-5 inline-flex">
                    {s.link.label} <span aria-hidden>→</span>
                  </Link>
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StaffDivider />

      <ImpactBand
        eyebrow="Get involved"
        actions={[
          { href: "/apply", label: "Sign up" },
          { href: "/volunteer", label: "Volunteer" },
        ]}
      >
        Learn with us, or teach with us.
      </ImpactBand>
    </>
  );
}
