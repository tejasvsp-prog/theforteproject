import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { roadmap } from "@/lib/site";

/**
 * The closing spread: a heavy rule, one oversized line, two plain actions,
 * and the honest roadmap as a footnote. No band, no gradient.
 */
export default function ImpactBanner() {
  return (
    <section className="border-t-2 border-ink">
      <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          <p className="t-kicker text-accent">Get started</p>
          <p className="t-display mt-6 max-w-[18ch]">
            Learn music, or teach it.{" "}
            <em className="text-accent">Either way, it&apos;s free.</em>
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Button href="/apply">
              Sign up for lessons <span aria-hidden>→</span>
            </Button>
            <Link href="/volunteer" className="link-rule">
              Volunteer to teach
            </Link>
          </div>
        </Reveal>

        {/* Roadmap, framed as plans — a quiet margin note */}
        <Reveal className="self-end border-t hairline pt-5 lg:col-span-3 lg:col-start-10">
          <p className="t-caption">
            Right now we&apos;re fully virtual. What we hope to add:
          </p>
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
