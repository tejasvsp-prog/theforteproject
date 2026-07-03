"use client";

import { motion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Stage {
  title: string;
  text: string;
}

const stages: Stage[] = [
  {
    title: "Submit application",
    text: "Tell us about your musical background and where you can help.",
  },
  {
    title: "Application review",
    text: "Our team reviews your experience and teaching interests.",
  },
  {
    title: "Volunteer onboarding",
    text: "Get oriented with our teaching approach and expectations.",
  },
  {
    title: "Student matching",
    text: "We pair you with a student who fits your strengths.",
  },
  {
    title: "Begin teaching",
    text: "Start free live Zoom lessons and make an impact.",
  },
];

export default function ProcessTimeline() {
  return (
    <Section id="process" className="bg-cream" staff>
      <SectionHeading
        eyebrow="Volunteer Process"
        title="From application to first lesson"
        description="A clear, supportive path — we guide you through every step."
        align="left"
        className="max-w-xl"
      />

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mt-16 max-w-2xl"
      >
        {/* Vertical connecting line, threaded through the numeral markers. */}
        <span
          className="absolute left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent"
          aria-hidden
        />
        {stages.map((stage, i) => (
          <motion.li
            key={stage.title}
            variants={fadeUp}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-navy/15 bg-cream font-serif text-lg text-navy transition-colors group-hover:border-gold">
              {i + 1}
            </span>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Step {i + 1}
              </span>
              <h3 className="mt-1 font-serif text-xl text-navy">
                {stage.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-charcoal-light">
                {stage.text}
              </p>
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
