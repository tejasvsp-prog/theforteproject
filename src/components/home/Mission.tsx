import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <Section id="mission" className="bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:gap-16">
          <Reveal className="lg:pt-2">
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold/60" aria-hidden />
              Our Mission
            </span>
          </Reveal>

          <Reveal delay={0.05} className="space-y-8">
            {/* Lead statement set larger, like an editorial standfirst. */}
            <p className="font-serif text-2xl font-medium leading-[1.4] text-navy sm:text-[1.85rem]">
              We believe access to a music education should never depend on where
              a student is born or what their family can afford.
            </p>
            <p className="text-lg leading-relaxed text-charcoal-light">
              The Forte Project is a student-led initiative expanding access to
              quality music education worldwide. By pairing high school musicians
              with underprivileged students for free virtual lessons, we give
              every student the opportunity to learn, create, and grow through
              music — and give young teachers a first taste of what it means to
              give back.
            </p>

            <div className="flex items-center gap-4 border-l-2 border-gold pl-5">
              <p className="text-sm leading-relaxed text-charcoal-muted">
                Built and run entirely by students — because the people closest
                to the problem are often the ones ready to solve it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
