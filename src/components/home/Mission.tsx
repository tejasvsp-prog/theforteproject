import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <section id="mission" className="relative overflow-hidden py-20 md:py-28 lg:py-32">
      {/* Oversized decorative quote glyph, bleeding off the top-left — anchors
          the whitespace so the section reads composed, not empty. */}
      <span
        aria-hidden
        className="pointer-events-none absolute -left-2 -top-8 select-none font-display text-[16rem] italic leading-none text-accent/10 md:-top-16 md:text-[22rem]"
      >
        &ldquo;
      </span>
      <div className="wrap relative grid gap-10 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-8">
          <p className="t-kicker text-accent">Why we started</p>
          <p className="t-display mt-7 max-w-[16ch]">
            Music lessons cost money a lot of families don&apos;t have.{" "}
            <span className="text-gradient">Talent doesn&apos;t.</span>
          </p>
        </Reveal>
        {/* Supporting line hangs lower-right, threaded onto a hairline. */}
        <Reveal className="self-end lg:col-span-4">
          <div className="border-t border-white/10 pt-6">
            <p className="t-lead max-w-prose">
              Our mission is simple: make sure every student can learn music —
              regardless of what their family can afford. We&apos;re students
              ourselves, and we teach for free.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
