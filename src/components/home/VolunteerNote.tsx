import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { KeysArc } from "@/components/decor/MusicArt";

/**
 * One idea, one action: if you play, teach. A narrow editorial interlude
 * with the keys figure hanging in the margin.
 */
export default function VolunteerNote() {
  return (
    <section id="volunteer-note" className="border-t hairline">
      <div className="wrap grid items-end gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-2 lg:col-start-2">
          <div className="group w-24 overflow-hidden text-ink lg:w-full">
            <div className="transition-transform duration-700 ease-signal group-hover:scale-[1.04]">
              <KeysArc className="h-auto w-full" />
            </div>
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7 lg:col-start-5">
          <p className="t-kicker text-accent">Volunteer</p>
          <p className="t-h2 mt-5 max-w-[22ch]">
            Play in your school&apos;s top ensemble? Teach someone who
            can&apos;t afford lessons.
          </p>
          <Link href="/volunteer" className="link-rule mt-7 inline-flex">
            Become a teacher <span aria-hidden>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
