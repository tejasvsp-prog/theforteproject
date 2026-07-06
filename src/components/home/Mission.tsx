import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <section id="mission" className="relative py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="t-kicker text-accent">Why we started</p>
          <p className="t-display mt-7">
            Music lessons cost money a lot of families don&apos;t have.{" "}
            <span className="text-accent">Talent doesn&apos;t.</span>
          </p>
          <p className="t-lead mx-auto mt-8 max-w-prose text-ink/75">
            Our mission is simple: make sure every student can learn music —
            regardless of what their family can afford. We&apos;re students
            ourselves, and we teach for free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
