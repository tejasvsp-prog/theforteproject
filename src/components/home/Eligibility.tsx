import Reveal from "@/components/ui/Reveal";
import { eligibility } from "@/lib/site";

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="9" className="fill-accent/12" />
      <path d="M6 10.5l2.5 2.5L14 7.5" stroke="#b44a2c" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function Dash() {
  return (
    <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0" aria-hidden>
      <circle cx="10" cy="10" r="9" className="fill-ink/8" />
      <path d="M6.5 10h7" stroke="#2a2320" strokeOpacity="0.5" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Eligibility() {
  return (
    <section id="who" className="relative bg-cream py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">Being honest</p>
          <h2 className="t-h2 mt-5">Who this is for.</h2>
          <p className="t-lead mt-6 max-w-prose text-ink/75">
            Anyone can sign up — but we built this for students who&apos;d
            otherwise go without. So we&apos;re upfront about the fit.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-6 lg:grid-cols-12 lg:gap-10">
          {/* The one that matters — larger, brought forward. */}
          <Reveal className="rounded-3xl border border-accent/25 bg-paper p-8 shadow-card sm:p-10 lg:col-span-7">
            <h3 className="t-h3">This is for you if…</h3>
            <ul className="mt-6 space-y-4">
              {eligibility.forItems.map((item) => (
                <li key={item} className="flex gap-3 t-body text-ink/85">
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* The caveat — smaller, quieter, dropped down so the pair reads
              as a note beside the main point rather than a matching twin. */}
          <Reveal className="rounded-3xl border border-ink/10 p-8 sm:p-10 lg:col-span-5 lg:mt-16">
            <h3 className="t-h3 text-ink/60">Maybe not the right fit if…</h3>
            <ul className="mt-6 space-y-4">
              {eligibility.notItems.map((item) => (
                <li key={item} className="flex gap-3 t-body text-ink/55">
                  <Dash />
                  {item}
                </li>
              ))}
            </ul>
            <p className="t-script mt-8 text-[1.35rem] text-ink/40">
              …but honestly, just ask.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
