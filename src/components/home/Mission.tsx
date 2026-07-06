import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <section id="mission" className="relative py-20 md:py-28 lg:py-32">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-8">
          <p className="t-kicker text-accent">Why we started</p>
          <p className="t-display mt-7 max-w-[15ch]">
            Music lessons cost money a lot of families don&apos;t have.{" "}
            <span className="relative text-accent">
              Talent doesn&apos;t.
              <span className="t-script absolute -bottom-6 left-0 whitespace-nowrap text-[1.3rem] text-ink/45">
                that&apos;s the whole idea.
              </span>
            </span>
          </p>
        </Reveal>
        {/* Supporting line hangs in the right column and sits lower — the
            page breathes unevenly, the way a real spread does. */}
        <Reveal className="self-end lg:col-span-4 lg:pt-2">
          <p className="t-lead max-w-prose text-ink/75">
            Our mission is simple: make sure every student can learn music —
            regardless of what their family can afford. We&apos;re students
            ourselves, and we teach for free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
