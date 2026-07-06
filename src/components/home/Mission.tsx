import Reveal from "@/components/ui/Reveal";

/**
 * The thesis, set as a magazine pull quote: a heavy rule, an oversized
 * italic line pushed right of the margin, and a short aside column.
 */
export default function Mission() {
  return (
    <section id="mission" className="border-t-2 border-ink">
      <div className="wrap grid gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-2">
          <p className="t-kicker text-accent">Why we started</p>
        </Reveal>

        <Reveal className="lg:col-span-7">
          <blockquote className="t-pull">
            &ldquo;Music lessons cost money a lot of families don&apos;t have.
            Talent doesn&apos;t.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal className="self-end lg:col-span-3">
          <p className="t-body max-w-measure text-stone">
            That&apos;s the whole idea. So we teach for free.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
