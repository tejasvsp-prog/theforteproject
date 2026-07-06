import Button from "@/components/ui/Button";
import Link from "next/link";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import { siteConfig } from "@/lib/site";
import { StaffPhrase } from "@/components/decor/MusicArt";

const index = [
  ["01", "Always free"],
  ["02", "K–12, virtual"],
  ["03", "30 min, twice a month"],
] as const;

/**
 * Magazine front page: a dateline rule, an oversized left-set headline with
 * an inline figure in the right margin, then an offset standfirst.
 */
export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      {/* One quiet floating note — background accent, nothing more */}
      <span
        aria-hidden
        className="motion-safe:animate-drift pointer-events-none absolute right-[12%] top-40 select-none font-display text-5xl italic text-accent/15"
      >
        ♪
      </span>

      <div className="wrap">
        {/* Dateline */}
        <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-4">
          <p className="t-kicker text-ink">
            {siteConfig.name} <span className="text-accent">·</span>{" "}
            {siteConfig.location}
          </p>
          <p className="t-kicker text-stone">Student-run</p>
        </div>

        {/* Headline row — 8/4 asymmetric */}
        <Reveal stagger className="grid gap-10 pt-12 md:pt-16 lg:grid-cols-12 lg:gap-8">
          <RevealItem className="lg:col-span-8">
            <h1 className="t-hero max-w-[16ch]">
              Free music lessons,{" "}
              <em className="text-accent">taught by students.</em>
            </h1>
          </RevealItem>

          {/* Inline figure, hung on a hairline — zooms a breath on hover */}
          <RevealItem className="hidden self-end lg:col-span-4 lg:block">
            <figure className="group border-t hairline pt-5">
              <div className="overflow-hidden text-ink">
                <div className="transition-transform duration-700 ease-signal group-hover:scale-[1.03]">
                  <StaffPhrase className="h-auto w-full" />
                </div>
              </div>
              <figcaption className="t-caption mt-3">
                Fig. 1 — a first phrase.
              </figcaption>
            </figure>
          </RevealItem>
        </Reveal>

        {/* Standfirst — pushed off the left margin */}
        <Reveal stagger className="grid gap-8 pb-16 pt-12 md:pb-24 lg:grid-cols-12 lg:gap-8">
          <RevealItem className="lg:col-span-6 lg:col-start-4">
            <p className="t-lead max-w-measure">
              We&apos;re students in {siteConfig.location}, teaching free virtual
              lessons to K–12 students who can&apos;t afford them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Button href="/apply">
                Sign up <span aria-hidden className="transition-transform duration-300 ease-signal group-hover:translate-x-1">→</span>
              </Button>
              <Link href="/volunteer" className="link-rule">
                Or teach
              </Link>
            </div>
          </RevealItem>

          {/* The index — a numbered margin column */}
          <RevealItem
            as="ul"
            className="flex flex-col gap-3 border-t hairline pt-5 lg:col-span-3 lg:col-start-10 lg:border-t-0 lg:pt-1"
          >
            {index.map(([n, label]) => (
              <li key={n} className="flex items-baseline gap-3 border-b hairline pb-3">
                <span className="font-display text-sm italic text-accent">{n}</span>
                <span className="t-body text-ink">{label}</span>
              </li>
            ))}
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
