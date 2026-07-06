import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import TallyEmbed from "@/components/ui/TallyEmbed";
import Faq from "@/components/home/Faq";
import { StaffDivider } from "@/components/decor/MusicArt";

export const metadata: Metadata = {
  title: "Sign up",
  description:
    "Sign up for free, virtual music lessons — 30 minutes, twice a month, one-on-one with a student volunteer. One short form is all it takes.",
  alternates: { canonical: "/apply" },
};

const flows = [
  {
    who: "Students",
    what: "Fill out the interest form below. A volunteer teacher reaches out to schedule.",
    cta: { href: "#form", label: "Go to the form", anchor: true },
  },
  {
    who: "Parents",
    what: "Signing up your child? You're welcome to fill out the same form on their behalf.",
    cta: { href: "#form", label: "Go to the form", anchor: true },
  },
  {
    who: "Volunteers",
    what: "A sophomore or older, in your school's top ensemble? Apply on the volunteer page.",
    cta: { href: "/volunteer#apply", label: "Volunteer application", anchor: false },
  },
] as const;

const details = [
  ["Cost", "Free"],
  ["Length", "30 minutes"],
  ["Frequency", "Twice a month"],
  ["Format", "One-on-one, over video"],
] as const;

export default function ApplyPage() {
  return (
    <>
      <PageHero
        eyebrow="Sign up"
        title="Start here."
        description="Lessons are free, virtual, and open to any K–12 student. Pick your path."
      />

      {/* Three clear flows */}
      <section className="py-12 md:py-16">
        <div className="wrap">
          <Reveal stagger className="grid gap-6 md:grid-cols-3">
            {flows.map((f) => (
              <RevealItem key={f.who} className="card-line flex flex-col p-7">
                <h2 className="t-h3">{f.who}</h2>
                <p className="t-body mt-3 flex-1 text-stone">{f.what}</p>
                <Link href={f.cta.href} className="link-rule mt-6 inline-flex self-start">
                  {f.cta.label} <span aria-hidden>{f.cta.anchor ? "↓" : "→"}</span>
                </Link>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <StaffDivider />

      {/* What you're signing up for — the program facts */}
      <section className="py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-kicker text-navy">How lessons work</h2>
            <p className="t-h2 mt-5 max-w-[16ch]">
              What you&apos;re signing up for.
            </p>
            <p className="t-body mt-6 max-w-xs text-stone">
              Which instruments? It depends on our volunteers — tell us what
              you play, or want to play, and we&apos;ll match you.
            </p>
          </Reveal>
          <Reveal as="ul" className="lg:col-span-7 lg:col-start-6">
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

      <Faq />

      {/* The form */}
      <section id="form" className="scroll-mt-24 py-16 md:py-24">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-display max-w-[12ch]">The interest form.</h2>
            <p className="t-body mt-4 max-w-xs text-stone">
              Tell us what you&apos;d like to learn and whether you have an
              instrument. That&apos;s the whole start.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6">
            <TallyEmbed formKey="student" height={700} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
