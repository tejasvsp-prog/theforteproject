import Button from "@/components/ui/Button";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import {
  StaffPhrase,
  NotesField,
  SpinningRecord,
  Equalizer,
} from "@/components/decor/MusicArt";

const facts = ["Free", "Virtual", "Grades 5–12", "Student-led"] as const;

// Masked line: the headline rises out of its own baseline.
const maskRise = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
} as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 md:pt-44">
      {/* Faint staff lines rising behind the composition */}
      <div aria-hidden className="staff-bg absolute inset-x-0 top-24 h-64 opacity-70" />
      {/* Soft colour washes for depth — sky upper-right, coral lower-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-20 h-[30rem] w-[30rem] rounded-full opacity-50"
        style={{ background: "radial-gradient(circle, rgba(165,195,222,0.35), rgba(246,226,224,0) 68%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-32 h-[26rem] w-[26rem] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(233,120,98,0.28), rgba(246,226,224,0) 68%)" }}
      />
      {/* Notes floating around the whole composition */}
      <NotesField />

      <div className="wrap relative">
        <Reveal stagger className="grid gap-12 pb-20 md:pb-32 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <RevealItem variants={maskRise}>
                <h1 className="t-hero-xl">The Forte Project</h1>
              </RevealItem>
            </div>
            <RevealItem>
              <p className="t-lead mt-6 max-w-measure text-stone">
                Student volunteers providing free music lessons to students in
                grades 5–12 — middle school through high school.
              </p>
            </RevealItem>
            <RevealItem>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
                <li className="mr-1 flex items-end">
                  <Equalizer />
                </li>
                {facts.map((f, i) => (
                  <li key={f} className="flex items-center gap-3 t-body text-ink">
                    {i > 0 && (
                      <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
                    )}
                    {f}
                  </li>
                ))}
              </ul>
            </RevealItem>
            <RevealItem>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href="/apply">Get started</Button>
                <Button href="/volunteer" variant="secondary">
                  Become a volunteer
                </Button>
              </div>
            </RevealItem>
          </div>

          {/* The staff engraving with the record spinning over its edge */}
          <RevealItem className="relative hidden self-center lg:col-span-4 lg:col-start-9 lg:block">
            <div className="text-ink">
              <StaffPhrase className="h-auto w-full" />
            </div>
            <SpinningRecord className="absolute -right-6 -top-20 h-32 w-32 drop-shadow-none" />
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
