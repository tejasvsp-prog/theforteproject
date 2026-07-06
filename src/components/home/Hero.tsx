import Button from "@/components/ui/Button";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { StaffPhrase } from "@/components/decor/MusicArt";

const index = [
  ["01", "Always free"],
  ["02", "K–12, virtual"],
  ["03", "30 min, twice a month"],
] as const;

/**
 * Magazine front page: a dateline rule, an oversized left-set headline with
 * an inline figure in the right margin, then an offset standfirst. Nothing
 * centered, nothing carded.
 */
export default function Hero() {
  return (
    <section className="pt-28 md:pt-32">
      <div className="wrap">
        {/* Dateline */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-4">
          <p className="t-kicker text-ink">
            {siteConfig.name} <span className="text-accent">·</span>{" "}
            {siteConfig.location}
          </p>
          <p className="t-kicker text-stone">Student-run, since day one</p>
        </div>

        {/* Headline row — 8/4 asymmetric */}
        <div className="grid gap-10 pt-10 md:pt-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <h1 className="t-hero max-w-[16ch]">
              Free music lessons,{" "}
              <em className="text-accent">taught by students.</em>
            </h1>
          </div>

          {/* Inline figure in the right margin, hung on a hairline */}
          <figure className="hidden self-end border-t hairline pt-5 lg:col-span-4 lg:block">
            <div className="text-ink">
              <StaffPhrase className="h-auto w-full" />
            </div>
            <figcaption className="t-caption mt-3">
              Fig. 1 — a first phrase, the kind a student plays in week one.
            </figcaption>
          </figure>
        </div>

        {/* Standfirst — pushed off the left margin, magazine-style */}
        <div className="grid gap-8 pb-14 pt-10 md:pb-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6 lg:col-start-4">
            <p className="t-lead max-w-measure">
              We&apos;re a student-run group in {siteConfig.location}. If
              you&apos;re a K–12 student who can&apos;t afford music lessons —
              whether you already play or you&apos;re starting from scratch —
              we&apos;ll teach you. It costs nothing.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/apply">
                Sign up for lessons <span aria-hidden>→</span>
              </Button>
              <Link href="/volunteer" className="link-rule">
                Volunteer to teach
              </Link>
            </div>
          </div>

          {/* The index — a numbered margin column, not chips */}
          <ul className="flex flex-col gap-3 border-t hairline pt-5 lg:col-span-3 lg:col-start-10 lg:border-t-0 lg:pt-1">
            {index.map(([n, label]) => (
              <li key={n} className="flex items-baseline gap-3 border-b hairline pb-3">
                <span className="font-display text-sm italic text-accent">{n}</span>
                <span className="t-body text-ink">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
