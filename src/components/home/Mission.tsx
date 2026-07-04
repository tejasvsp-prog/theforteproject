import RailSection from "@/components/ui/RailSection";

export default function Mission() {
  return (
    <RailSection
      id="mission"
      index="01"
      kicker="Our Mission"
      title="Every student deserves the chance to make music."
    >
      <div className="max-w-prose">
        <p className="t-lead text-ink/85">
          The Forte Project is a{" "}
          <span className="text-accent">student-led</span> initiative expanding
          access to quality music education worldwide. By pairing high-school
          musicians with underprivileged students for free virtual lessons, we
          give every student the opportunity to learn, create, and grow through
          music — and give young teachers a first taste of what it means to give
          back.
        </p>
        <p className="t-caption mt-8 border-l-2 border-accent pl-4 text-ink/60">
          Built and run entirely by students — because the people closest to the
          problem are often the ones ready to solve it.
        </p>
      </div>
    </RailSection>
  );
}
