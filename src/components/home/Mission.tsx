import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <Section id="mission" className="bg-white">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal className="flex flex-col items-center">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Our Mission
            <span className="h-px w-6 bg-gold/60" aria-hidden />
          </span>

          {/* Lead statement set large, like an editorial standfirst. */}
          <p className="mt-8 font-serif text-[1.65rem] font-medium leading-[1.4] text-navy sm:text-[2.15rem] sm:leading-[1.35]">
            We believe access to a music education should never depend on where
            a student is born — or what their family can afford.
          </p>
        </Reveal>

        <div className="rule-note mx-auto mt-12 max-w-xs">
          <span className="font-serif text-xl leading-none text-gold" aria-hidden>
            &#9834;
          </span>
        </div>

        <Reveal
          delay={0.05}
          className="mx-auto mt-12 max-w-2xl space-y-6 text-left"
        >
          <p className="text-lg leading-relaxed text-charcoal-light">
            <span className="float-left mr-3 mt-1.5 font-serif text-6xl font-medium leading-[0.72] text-navy">
              T
            </span>
            he Forte Project is a student-led initiative expanding access to
            quality music education worldwide. By pairing high school musicians
            with underprivileged students for free virtual lessons, we give
            every student the opportunity to learn, create, and grow through
            music — and give young teachers a first taste of what it means to
            give back.
          </p>

          <p className="border-l-2 border-gold pl-5 text-sm leading-relaxed text-charcoal-muted">
            Built and run entirely by students — because the people closest to
            the problem are often the ones ready to solve it.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
