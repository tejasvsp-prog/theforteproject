import RailSection from "@/components/ui/RailSection";

export default function Story() {
  return (
    <RailSection
      id="story"
      index="01"
      kicker="Our Story"
      title="Built by students, for students."
    >
      <div className="max-w-prose space-y-6 t-body text-ink/80">
        <p>
          The Forte Project began with a simple idea: talented young musicians
          have something extraordinary to give, and students around the world
          are eager to receive it. We connect the two.
        </p>
        <p>
          Every one of our instructors is a high-school musician who volunteers
          their time, and every lesson is delivered free over Zoom — removing
          cost and distance as barriers to a meaningful music education.
        </p>
      </div>

      <figure className="my-12 border-y py-10 hairline md:my-16 md:py-14">
        <blockquote className="t-quote max-w-[22ch]">
          Talent is <span className="text-accent">everywhere.</span> Opportunity
          is not.
        </blockquote>
      </figure>

      <div className="max-w-prose t-body text-ink/80">
        <p>
          What grows from each pairing is more than technique. It is confidence,
          mentorship, and a lifelong relationship with music — for the student
          learning, and for the young teacher discovering what it means to give
          back.
        </p>
      </div>
    </RailSection>
  );
}
