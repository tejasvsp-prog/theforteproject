import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { KeysArc, AmbientNotes } from "@/components/decor/MusicArt";

/**
 * One idea, one action: if you play, teach. A frost interlude with the
 * piano figure holding the left margin.
 */
export default function VolunteerNote() {
  return (
    <section id="volunteer-note" className="relative border-y hairline bg-surface">
      <AmbientNotes className="opacity-70" />
      <div className="wrap relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3 lg:col-start-2">
          <div className="w-40 text-ink sm:w-48 lg:w-full">
            <KeysArc className="h-auto w-full" />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-6">
          <p className="t-kicker text-navy">Volunteer</p>
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
