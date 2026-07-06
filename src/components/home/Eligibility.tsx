import Reveal from "@/components/ui/Reveal";
import { eligibility } from "@/lib/site";

/**
 * Who it's for, written straight: a wide affirmative column and a narrow,
 * quieter caveat column set lower. Plain text markers, no icon badges.
 */
export default function Eligibility() {
  return (
    <section id="who" className="border-t hairline">
      <div className="wrap py-16 md:py-24">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">Being honest</p>
          <h2 className="t-h2 mt-5">Who this is for.</h2>
          <p className="t-lead mt-6 max-w-prose text-stone">
            Anyone can sign up — but we built this for students who&apos;d
            otherwise go without. So we&apos;re upfront about the fit.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="border-t-2 border-ink pt-6 lg:col-span-6">
            <h3 className="t-h3">This is for you if…</h3>
            <ul className="mt-5">
              {eligibility.forItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b hairline py-4 t-body"
                >
                  <span aria-hidden className="mt-2 h-2 w-2 shrink-0 bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="border-t hairline pt-6 lg:col-span-4 lg:col-start-9 lg:mt-16">
            <h3 className="t-h3 text-stone">Probably not the right fit if…</h3>
            <ul className="mt-5">
              {eligibility.notItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b hairline py-4 t-body text-stone"
                >
                  <span aria-hidden className="font-display italic text-stone">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="t-caption mt-6 italic">…but honestly, just ask.</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
