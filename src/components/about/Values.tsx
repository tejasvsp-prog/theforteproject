import Reveal from "@/components/ui/Reveal";

const beliefs = [
  {
    n: "01",
    title: "Cost shouldn't decide who learns",
    body: "Talent and interest are everywhere. The ability to pay for lessons isn't. We teach the students who'd otherwise miss out.",
  },
  {
    n: "02",
    title: "Students teaching students",
    body: "Every teacher is a high schooler who still remembers what it's like to start — and who plays at the top of their own program.",
  },
  {
    n: "03",
    title: "Free, and it stays free",
    body: "No fees, no catch. Signing up takes a form, and a teacher takes it from there.",
  },
  {
    n: "04",
    title: "Meet you where you are",
    body: "Already play an instrument, or don't own one yet — either way there's a way in, with lessons or with theory and composition.",
  },
];

export default function Values() {
  return (
    <section id="beliefs" className="relative border-t hairline bg-surface py-16 md:py-24">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">What we believe</p>
          <h2 className="t-h2 mt-5">A few things we hold to.</h2>
        </Reveal>

        <div
          className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2"
        >
          {beliefs.map((b) => (
            <div key={b.n} className="flex gap-6 border-t hairline pt-5">
              <span className="font-display shrink-0 italic text-accent">
                {b.n}
              </span>
              <div>
                <h3 className="t-h3">{b.title}</h3>
                <p className="t-body mt-2.5 max-w-sm text-stone">{b.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
