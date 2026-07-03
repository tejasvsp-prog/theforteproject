import { Heart } from "lucide-react";
import Section from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";

export default function Mission() {
  return (
    <Section id="mission" className="bg-white">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            Our Mission
          </span>
          <h2 className="heading-serif text-3xl leading-tight sm:text-4xl">
            Every student deserves the opportunity to learn, create, and grow
            through music.
          </h2>
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-soft text-gold-dark">
            <Heart className="h-5 w-5" aria-hidden />
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-charcoal-light">
            The Forte Project is a student-led music education initiative
            dedicated to expanding access to quality music education worldwide.
            By connecting high school musicians with underprivileged students
            through free virtual lessons, we believe every student deserves the
            opportunity to learn, create, and grow through music.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
