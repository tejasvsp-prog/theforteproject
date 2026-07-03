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
        className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2"
      >
        {programs.map((program) => (
          <motion.article
            key={program.title}
            variants={fadeUp}
            className="group relative flex flex-col border-t-2 border-navy/15 pt-7 transition-colors duration-500 hover:border-gold sm:pt-8"
          >
            {/* Oversized index numeral set like a chapter opener. */}
            <div className="flex items-baseline gap-4">
              <span className="font-serif text-[2.75rem] font-medium leading-none text-gold">
                {program.index}
              </span>
              <program.icon
                className="h-5 w-5 translate-y-[-0.15rem] text-navy/40"
                aria-hidden
              />
            </div>

            <h3 className="mt-6 font-serif text-[1.6rem] leading-tight text-navy">
              {program.title}
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-charcoal-light">
              {program.description}
            </p>

            <div className="mt-7 border-t border-navy/10 pt-5">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                What we focus on
              </p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {program.focus.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-3 text-[0.95rem] text-charcoal"
                  >
                    <span
                      className="h-1.5 w-1.5 flex-none translate-y-[-0.1rem] rotate-45 bg-gold/70"
                      aria-hidden
                    />
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
