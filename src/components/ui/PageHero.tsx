import Reveal from "./Reveal";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
}

/** Left-anchored page title band with a closing hairline. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-ink pb-14 pt-32 md:pb-20 md:pt-40 lg:pt-44">
      <div className="wrap">
        <Reveal>
          <p className="t-kicker text-accent">{eyebrow}</p>
          <h1 className="t-display mt-6 max-w-[16ch]">{title}</h1>
          <p className="t-lead mt-8 max-w-prose text-ink/80">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
