import Button from "@/components/ui/Button";
import Reveal, { RevealItem } from "@/components/ui/Reveal";
import { StaffPhrase } from "@/components/decor/MusicArt";

const facts = ["Free", "Virtual", "Student-led", "Based in Michigan"] as const;

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-36">
      {/* Faint staff lines rising behind the composition */}
      <div aria-hidden className="staff-bg absolute inset-x-0 top-24 h-56 opacity-70" />

      <div className="wrap relative">
        <Reveal stagger className="grid gap-12 pb-16 md:pb-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <RevealItem>
              <h1 className="t-hero">The Forte Project</h1>
            </RevealItem>
            <RevealItem>
              <p className="t-lead mt-6 max-w-measure text-stone">
                Student volunteers providing free music lessons to K–12
                students.
              </p>
            </RevealItem>
            <RevealItem>
              <ul className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
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

          {/* The staff engraving, hung quietly in the right margin */}
          <RevealItem className="hidden self-center lg:col-span-4 lg:col-start-9 lg:block">
            <div className="group overflow-hidden text-ink">
              <div className="transition-transform duration-700 ease-signal group-hover:scale-[1.03]">
                <StaffPhrase className="h-auto w-full" />
              </div>
            </div>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
