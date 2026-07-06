import Reveal from "@/components/ui/Reveal";
import { volunteerReqs } from "@/lib/site";

export default function Requirements() {
  return (
    <section id="requirements" className="relative py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-accent">What we ask</p>
          <h2 className="t-h2 mt-5">Two things, really.</h2>
          <p className="t-body mt-6 max-w-xs text-stone">
            If both are true, you&apos;re exactly who we&apos;re looking for.
          </p>
        </Reveal>

        <div
          className="grid gap-6 sm:grid-cols-2 lg:col-span-8"
        >
          {volunteerReqs.map((r, i) => (
            <div
              key={r.title}
              className="border-t-2 border-ink pt-6"
            >
              <span className="t-numeral">No. {i + 1}</span>
              <h3 className="t-h3 mt-4">{r.title}</h3>
              <p className="t-body mt-2.5 text-stone">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
