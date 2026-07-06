import Reveal from "@/components/ui/Reveal";
import { StaffDivider } from "@/components/decor/MusicArt";

export default function Mission() {
  return (
    <section id="mission">
      <StaffDivider />
      <div className="wrap grid gap-8 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-3">
          <h2 className="t-kicker text-navy">Our mission</h2>
        </Reveal>
        <Reveal className="lg:col-span-7">
          <p className="t-display max-w-[26ch]">
            Every student should have access to music education, regardless of
            their family&apos;s financial resources.
          </p>
          <p className="t-body mt-6 max-w-prose text-stone">
            Private lessons are expensive. Ours are taught by student
            volunteers from their schools&apos; top ensembles — and cost
            nothing.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
