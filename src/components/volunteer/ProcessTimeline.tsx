"use client";

import { motion } from "framer-motion";
import {
  FileEdit,
  Search,
  ClipboardCheck,
  Handshake,
  Play,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Stage {
  icon: LucideIcon;
  title: string;
  text: string;
}

const stages: Stage[] = [
  {
    icon: FileEdit,
    title: "Submit application",
    text: "Tell us about your musical background and where you can help.",
  },
  {
    icon: Search,
    title: "Application review",
    text: "Our team reviews your experience and teaching interests.",
  },
  {
    icon: ClipboardCheck,
    title: "Volunteer onboarding",
    text: "Get oriented with our teaching approach and expectations.",
  },
  {
    icon: Handshake,
    title: "Student matching",
    text: "We pair you with a student who fits your strengths.",
  },
  {
    icon: Play,
    title: "Begin teaching",
    text: "Start free live Zoom lessons and make an impact.",
  },
];

export default function ProcessTimeline() {
  return (
    <Section id="process" className="bg-cream" staff>
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Volunteer Process"
          title="From application to first lesson"
          description="A clear, supportive path — we guide you through every step."
        />
      </div>

      <motion.ol
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="relative mx-auto mt-16 max-w-2xl"
      >
        {/* Vertical connecting line */}
        <span
          className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/50 via-gold/30 to-transparent"
          aria-hidden
        />
        {stages.map((stage, i) => (
          <motion.li
            key={stage.title}
            variants={fadeUp}
            className="relative flex gap-6 pb-10 last:pb-0"
          >
            <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gold/30 bg-white text-navy shadow-soft">
              <stage.icon className="h-5 w-5 text-gold-dark" aria-hidden />
            </span>
            <div className="pt-1.5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                  Step {i + 1}
                </span>
              </div>
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
