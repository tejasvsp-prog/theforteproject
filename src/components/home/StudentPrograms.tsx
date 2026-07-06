import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { tracks } from "@/lib/site";
import { KeysArc } from "@/components/decor/MusicArt";

/**
 * The two ways in, set as an uneven ledger spread: chapter numerals over
 * hairlines, a wide column and a narrow one, no boxes.
 */
export default function StudentPrograms() {
  return (
    <section id="tracks" className="border-t hairline">
      <div className="wrap py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">Two ways to learn</p>
          <h2 className="t-h2 mt-5 max-w-[20ch]">
            With an instrument, or without one.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Wide column */}
          <Reveal as="section" className="border-t-2 border-ink pt-6 lg:col-span-7">
            <div className="flex items-baseline justify-between gap-4">
              <span className="t-numeral">No. 1</span>
              <p className="t-kicker text-stone">{tracks[0].label}</p>
            </div>
            <h3 className="t-display mt-5">{tracks[0].title}</h3>
            <p className="t-body mt-5 max-w-prose text-stone">{tracks[0].blurb}</p>
            <Link href="/apply" className="link-rule mt-7 inline-flex">
              Sign up <span aria-hidden>→</span>
            </Link>
          </Reveal>

          {/* Narrow column, dropped lower — with an inline figure */}
          <Reveal as="section" className="border-t-2 border-ink pt-6 lg:col-span-4 lg:col-start-9 lg:mt-20">
            <div className="flex items-baseline justify-between gap-4">
              <span className="t-numeral">No. 2</span>
              <p className="t-kicker text-stone">{tracks[1].label}</p>
            </div>
            <h3 className="t-display mt-5">{tracks[1].title}</h3>
            <p className="t-body mt-5 text-stone">{tracks[1].blurb}</p>
            <Link href="/apply" className="link-rule mt-7 inline-flex">
              Sign up <span aria-hidden>→</span>
            </Link>
            <figure className="mt-10 border-t hairline pt-5">
              <div className="w-28 text-accent">
                <KeysArc className="h-auto w-full" />
              </div>
              <figcaption className="t-caption mt-3">
                Fig. 2 — no instrument required for theory &amp; composition.
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
