import Reveal from "@/components/ui/Reveal";
import { steps } from "@/lib/site";

/**
 * The process as a numbered ledger — hairline rows of uneven width, read
 * top to bottom like a table of contents. No icons, no cards.
 */
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t hairline bg-surface">
      <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-accent">How it works</p>
          <h2 className="t-h2 mt-5 max-w-[14ch]">
            Signing up takes about a minute.
          </h2>
        </Reveal>

        <Reveal as="ol" className="lg:col-span-7 lg:col-start-6">
          {steps.map((s, i) => (
            <li
              key={s.n}
              className="grid gap-3 border-t hairline py-6 first:border-t-2 first:border-t-ink sm:grid-cols-[5rem_1fr] sm:gap-6"
            >
              <span className="font-display italic text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="t-h3">{s.title}</h3>
                <p className="t-body mt-2 max-w-prose text-stone">{s.body}</p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
