import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Left-anchored page title band with a closing hairline. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/8 pb-14 pt-36 md:pb-20 md:pt-44 lg:pt-48">
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute -right-24 -top-32 h-[36rem] w-[36rem] rounded-full"
      />
      <div className="wrap relative">
        <Reveal>
          <p className="t-kicker text-accent">{eyebrow}</p>
          <h1 className="t-display mt-6 max-w-[16ch]">{title}</h1>
          <p className="t-lead mt-8 max-w-prose">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
