"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Music,
  BookOpenText,
  Check,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Program {
  icon: LucideIcon;
  title: string;
  description: string;
  focus: string[];
  href: string;
  cta: string;
}

const programs: Program[] = [
  {
    icon: Music,
    title: "Performance Lessons",
    description:
      "For students who already have access to an instrument but cannot afford private instruction.",
    focus: ["Technique", "Performance", "Practice habits", "Musical growth"],
    href: "/apply#performance",
    cta: "Explore performance lessons",
  },
  {
    icon: BookOpenText,
    title: "Music Theory & Composition",
    description:
      "For students who do not have access to an instrument.",
    focus: [
      "Music theory",
      "Ear training",
      "Rhythm",
      "Composition",
      "Music appreciation",
    ],
    href: "/apply#theory",
    cta: "Explore theory lessons",
  },
];

export default function StudentPrograms() {
  return (
    <Section id="programs" className="bg-white">
      <div className="flex flex-col items-center">
        <SectionHeading
          eyebrow="Student Programs"
          title="Two ways to make music"
          description="Every student learns differently. We meet them where they are — with or without an instrument in hand."
        />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="mt-14 grid gap-6 lg:grid-cols-2"
      >
        {programs.map((program) => (
          <motion.article
            key={program.title}
            variants={fadeUp}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-navy/5 bg-cream p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
              <program.icon className="h-6 w-6" aria-hidden />
            </span>
            <h3 className="mt-6 font-serif text-2xl text-navy">
              {program.title}
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              {program.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                Focus
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {program.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-charcoal"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold-dark">
                      <Check className="h-3 w-3" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={program.href}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-dark"
            >
              {program.cta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
