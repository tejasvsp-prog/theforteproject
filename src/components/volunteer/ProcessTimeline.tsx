import Reveal from "@/components/ui/Reveal";

const points = [
  {
    title: "You teach students who signed up",
    body: "K–12 students who reached out for free lessons — matched to what you can help with.",
  },
  {
    title: "Virtual, and light on time",
    body: "Lessons are 30 minutes, twice a month, over video. No commute, no big commitment.",
  },
  {
    title: "Teach what you know",
    body: "Help a student improve on an instrument they already play, or teach music theory and composition.",
  },
  {
    title: "We'll get you set up",
    body: "Fill out the form and we'll be in touch about matching you with a student.",
  },
];

export default function ProcessTimeline() {
  return (
    <section id="how" className="relative bg-cream py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">What it looks like</p>
          <h2 className="t-h2 mt-5">Low commitment, real impact.</h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2">
          {points.map((p, i) => (
            <Reveal key={p.title} className="flex gap-5 border-t hairline pt-6">
              <span className="t-numeral text-[1.8rem] leading-none">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="t-h3">{p.title}</h3>
                <p className="t-body mt-2 max-w-sm text-ink/70">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
