import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { tracks } from "@/lib/site";

/** The two programs, side by side on uneven columns. */
export default function StudentPrograms() {
  return (
    <section id="tracks" className="border-t hairline">
      <div className="wrap py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-navy">Programs</p>
          <h2 className="t-h2 mt-5">
            With an instrument, or without one.
          </h2>
        </Reveal>

        <Reveal stagger className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          {tracks.map((track, i) => (
            <Reveal
              key={track.id}
              as="section"
              className={`border-t-2 border-ink pt-6 ${
                i === 0 ? "lg:col-span-6" : "lg:col-span-4 lg:col-start-9 lg:mt-10"
              }`}
            >
              <p className="t-kicker text-stone">{track.label}</p>
              <h3 className="t-display mt-4">{track.title}</h3>
              <p className="t-body mt-4 max-w-prose text-stone">{track.blurb}</p>
              <Link href="/apply" className="link-rule mt-6 inline-flex">
                About lessons <span aria-hidden>→</span>
              </Link>
            </Reveal>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
