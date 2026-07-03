import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Story() {
  return (
    <Section id="story" className="bg-white">
      <div className="mx-auto grid max-w-5xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Who We Are
          </span>
          <h2 className="heading-serif text-3xl leading-tight sm:text-4xl">
            A student-led movement for musical access.
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-charcoal-light">
          <p>
            The Forte Project began with a simple idea: talented young musicians
            have something extraordinary to give, and students around the world
            are eager to receive it. We connect the two.
          </p>
          <p>
            Every one of our instructors is a high school musician who volunteers
            their time, and every lesson is delivered free over Zoom — removing
            cost and distance as barriers to a meaningful music education. What
            grows from each pairing is more than technique: it is confidence,
            mentorship, and a lifelong relationship with music.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
