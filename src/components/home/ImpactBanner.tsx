import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { AmbientNotes } from "@/components/decor/MusicArt";
import { roadmap } from "@/lib/site";

/**
 * The closing spread: a heavy rule, one line, one action. The roadmap sits
 * in the margin as an honest footnote.
 */
export default function ImpactBanner() {
  return (
    <section className="relative border-t-2 border-ink">
      <AmbientNotes />
      <div className="wrap relative grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          <p className="t-display max-w-[16ch]">
            Ready? <em className="text-accent">It&apos;s free.</em>
          </p>
          <div className="mt-9">
            <Button href="/apply">
              Sign up for lessons <span aria-hidden>→</span>
            </Button>
          </div>
        </Reveal>

        <Reveal className="self-end border-t hairline pt-5 lg:col-span-3 lg:col-start-10">
          <p className="t-caption">Fully virtual today. We hope to add:</p>
          <ul className="mt-3 space-y-1.5">
            {roadmap.map((r) => (
              <li key={r} className="t-body font-display italic text-ink">
                {r}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
