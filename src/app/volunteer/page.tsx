import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import TallyEmbed from "@/components/ui/TallyEmbed";
import { StaffDivider } from "@/components/decor/MusicArt";
import { volunteerReqs, forms } from "@/lib/site";

export const metadata: Metadata = {
  title: "Volunteer",
  description:
    "Teach free virtual music lessons with The Forte Project. Volunteers are high school students — at least a sophomore, and a member of their school's highest ensemble.",
  alternates: { canonical: "/volunteer" },
};

const expectations = [
  ["Time commitment", "30 minutes, twice a month, per student."],
  ["Format", "Virtual lessons, over video — no commute."],
  ["What you teach", "The instrument you play, or music theory and composition."],
] as const;

const process = [
  {
    title: "Apply",
    body: "Fill out the volunteer form below.",
  },
  {
    title: "We follow up",
    body: "We confirm your eligibility and what you can teach.",
  },
  {
    title: "Get matched",
    body: "You're paired with a student and set a schedule together.",
  },
] as const;

const volunteerFaqs = [
  {
    q: "Who can volunteer?",
    a: "High school students who are at least a sophomore and a member of their school's highest ensemble.",
  },
  {
    q: "How much time does it take?",
    a: "Two 30-minute lessons a month per student, over video.",
  },
  {
    q: "What would I teach?",
    a: "Your instrument, or music theory and composition for students who don't have one.",
  },
  {
    q: "Do lessons happen in person?",
    a: "Not yet — everything is virtual today. In-person lessons are on our roadmap.",
  },
] as const;

export default function VolunteerPage() {
  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title="Teach a student who can't afford lessons."
        description="Our teachers are high school musicians who give a little time to pass it on."
      />

      {/* Eligibility */}
      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-kicker text-navy">Eligibility</h2>
            <p className="t-h2 mt-5 max-w-[14ch]">Two requirements.</p>
          </Reveal>
          <Reveal stagger className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
            {volunteerReqs.map((r) => (
              <Reveal key={r.title} className="border hairline p-7">
                <h3 className="t-h3">{r.title}</h3>
                <p className="t-body mt-2.5 text-stone">{r.body}</p>
              </Reveal>
            ))}
          </Reveal>
        </div>
      </section>

      <StaffDivider />

      {/* Expectations */}
      <section className="py-14 md:py-20">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-kicker text-navy">What to expect</h2>
          </Reveal>
          <Reveal as="ul" className="lg:col-span-7 lg:col-start-6">
            {expectations.map(([label, value]) => (
              <li
                key={label}
                className="grid gap-2 border-t hairline py-5 first:border-t-2 first:border-t-ink sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <span className="t-body text-stone">{label}</span>
                <span className="t-body">{value}</span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Application process */}
      <section className="border-t hairline bg-surface">
        <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-kicker text-navy">The process</h2>
          </Reveal>
          <Reveal as="ol" className="lg:col-span-7 lg:col-start-6">
            {process.map((p, i) => (
              <li
                key={p.title}
                className="grid gap-3 border-t hairline py-6 first:border-t-2 first:border-t-ink sm:grid-cols-[5rem_1fr] sm:gap-6"
              >
                <span className="font-display italic text-navy">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="t-h3">{p.title}</h3>
                  <p className="t-body mt-2 max-w-prose text-stone">{p.body}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Volunteer FAQ */}
      <section className="border-t hairline">
        <div className="wrap grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-4">
            <h2 className="t-kicker text-navy">Questions</h2>
          </Reveal>
          <Reveal as="ul" className="lg:col-span-7 lg:col-start-6">
            {volunteerFaqs.map((f) => (
              <li
                key={f.q}
                className="border-t hairline py-5 first:border-t-2 first:border-t-ink"
              >
                <h3 className="t-h3 text-[1.1rem]">{f.q}</h3>
                <p className="t-body mt-2 max-w-prose text-stone">{f.a}</p>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="scroll-mt-24 border-t-2 border-ink">
        <div className="wrap py-14 md:py-20">
          <Reveal className="max-w-2xl">
            <h2 className="t-display">Apply to teach.</h2>
            <p className="t-body mt-4 text-stone">
              Fill out the form and we&apos;ll be in touch about matching you
              with a student.
            </p>
            {forms.volunteer.shareUrl ? (
              <div className="mt-7">
                <Button href={forms.volunteer.shareUrl} external>
                  Open the form
                </Button>
              </div>
            ) : null}
          </Reveal>
          <Reveal className="mt-10 max-w-3xl">
            <TallyEmbed formKey="volunteer" height={700} />
          </Reveal>
        </div>
      </section>
    </>
  );
}
