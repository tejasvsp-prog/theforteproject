"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Music, BookOpenText, ArrowRight, type LucideIcon } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Program {
  index: string;
  icon: LucideIcon;
  title: string;
  description: string;
  focus: string[];
  href: string;
}

const programs: Program[] = [
  {
    index: "01",
    icon: Music,
    title: "Performance Lessons",
    description:
      "For students who have an instrument but can't afford private instruction.",
    focus: ["Technique", "Performance", "Practice habits", "Musical growth"],
    href: "/apply#performance",
  },
  {
    index: "02",
    icon: BookOpenText,
    title: "Music Theory & Composition",
    description: "For students who don't yet have access to an instrument.",
    focus: [
      "Music theory",
      "Ear training",
      "Rhythm",
      "Composition",
      "Music appreciation",
    ],
    href: "/apply#theory",
  },
];

export default function StudentPrograms() {
  return (
    <Section id="programs" className="bg-white">
      <SectionHeading
        eyebrow="Student Programs"
        title="Two ways to make music"
        description="Every student learns differently. We meet them where they are — with or without an instrument in hand."
        align="left"
        className="max-w-xl"
      />

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
            className="group relative flex flex-col rounded-3xl border border-navy/10 bg-cream p-8 transition-colors duration-300 hover:border-gold/40 sm:p-10"
          >
            {/* Gold rule that grows on hover — a small, deliberate detail. */}
            <span
              className="absolute left-8 right-8 top-0 h-0.5 origin-left scale-x-0 rounded-full bg-gold transition-transform duration-500 group-hover:scale-x-100 sm:left-10 sm:right-10"
              aria-hidden
            />
            <div className="flex items-start justify-between">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
                <program.icon className="h-6 w-6" aria-hidden />
              </span>
              <span className="font-serif text-5xl text-navy/10">
                {program.index}
              </span>
            </div>

            <h3 className="mt-7 font-serif text-2xl text-navy">
              {program.title}
            </h3>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              {program.description}
            </p>

            <div className="mt-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark">
                What we focus on
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {program.focus.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-navy/10 bg-white px-3.5 py-1.5 text-sm text-charcoal"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href={program.href}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold-dark"
            >
              Learn more &amp; apply
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  );
}
