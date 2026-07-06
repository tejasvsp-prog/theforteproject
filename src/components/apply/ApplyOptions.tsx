import Link from "next/link";
import { tracks } from "@/lib/site";

/**
 * The two tracks, shown as a choice — both lead to the same single interest
 * form below. On the form, students note whether they already have an
 * instrument.
 */
export default function ApplyOptions() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="wrap">
        <div
          className="grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {tracks.map((track, i) => (
            <div
              key={track.id}
              className={`border-t-2 border-ink pt-6 ${i === 1 ? "lg:mt-14" : ""}`}
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="t-numeral">No. {i + 1}</span>
                <p className="t-kicker text-stone">{track.label}</p>
              </div>
              <h2 className="t-display mt-5 text-[1.9rem] sm:text-[2.2rem]">
                {track.title}
              </h2>
              <p className="t-body mt-4 max-w-md text-stone">{track.blurb}</p>
              <Link href="#form" className="link-rule mt-7 inline-flex">
                Fill out the form <span aria-hidden>↓</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
