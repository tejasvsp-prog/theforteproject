import Reveal, { RevealItem } from "@/components/ui/Reveal";

const maskRise = {
  hidden: { y: "108%" },
  show: { y: "0%", transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
} as const;

export default function Mission() {
  return (
    <section id="mission">
      <div className="wrap grid gap-8 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <h2 className="t-kicker text-navy">Our mission</h2>
        </Reveal>
        <Reveal stagger className="lg:col-span-7">
          <div className="overflow-hidden">
            <RevealItem variants={maskRise}>
              <p className="t-display max-w-[26ch]">
                Every student should have access to music education, regardless
                of their family&apos;s financial resources.
              </p>
            </RevealItem>
          </div>
          <RevealItem>
            <p className="t-body mt-6 max-w-prose text-stone">
              Private lessons are expensive. Ours are taught by student
              volunteers from their schools&apos; top ensembles — and cost
              nothing.
            </p>
          </RevealItem>
        </Reveal>
      </div>
    </section>
  );
}
