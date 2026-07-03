"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Step {
  n: string;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    n: "01",
    title: "Volunteer",
    text: "High school musicians sign up to teach in the areas they know best, from strings to songwriting.",
  },
  {
    n: "02",
    title: "Match",
    text: "We pair each student with a volunteer by musical background and their access to an instrument.",
  },
  {
    n: "03",
    title: "Learn",
    text: "Free, live lessons on Zoom build real skill, steady confidence, and a lasting love of music.",
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-cream">
      <SectionHeading
        eyebrow="How It Works"
        title="Three steps, one connection"
        description="A willing teacher, an eager student, and a standing lesson on the calendar — anywhere in the world."
        align="left"
        className="max-w-xl"
      />

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3"
      >
        {steps.map((step, i) => (
          <motion.li key={step.n} variants={fadeUp} className="relative">
            {/* Hairline connector between steps on desktop. */}
            {i < steps.length - 1 ? (
              <span
                className="absolute right-[-1.25rem] top-5 hidden h-px w-10 bg-gradient-to-r from-gold/50 to-transparent md:block"
                aria-hidden
              />
            ) : null}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-4xl font-medium text-gold">
                {step.n}
              </span>
              <span className="h-px flex-1 translate-y-[-0.4rem] bg-navy/10" aria-hidden />
            </div>
            <h3 className="mt-5 font-serif text-2xl text-navy">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              {step.text}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
