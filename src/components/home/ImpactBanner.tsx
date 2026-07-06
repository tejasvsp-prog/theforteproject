import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { AmbientNotes } from "@/components/decor/MusicArt";
import { roadmap } from "@/lib/site";

/**
 * The closing band: record-navy, one line, one action. It flows straight
 * into the navy footer so the page ends on a grounded brand block.
 */
export default function ImpactBanner() {
  return (
    <section className="staff-bg-light relative bg-navy text-paper">
      <AmbientNotes className="opacity-60" />
      <div className="wrap relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          <p className="t-kicker text-sky">Get started</p>
          <p className="t-display mt-6 max-w-[16ch] text-paper">
            Ready? <em className="text-accent">It&apos;s free.</em>
          </p>
          <div className="mt-9">
            <Button href="/apply" variant="onDark">
              Sign up for lessons <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <Reveal className="self-end border-t border-paper/20 pt-5 lg:col-span-3 lg:col-start-10">
          <p className="t-caption !text-paper/60">
            Fully virtual today. We hope to add:
          </p>
          <ul className="mt-3 space-y-1.5">
            {roadmap.map((r) => (
              <li key={r} className="t-body font-display italic text-paper/85">
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
