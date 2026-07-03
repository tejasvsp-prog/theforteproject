"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

/** Consistent, restrained hero band for interior pages. */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-navy/5 bg-cream pt-32 pb-16 sm:pt-36 lg:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(193,154,75,0.14) 0%, rgba(250,249,246,0) 68%)",
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content relative max-w-3xl"
      >
        {eyebrow ? (
          <motion.p
            variants={fadeUp}
            className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted"
          >
            <span className="h-px w-8 bg-gold" aria-hidden />
            {eyebrow}
          </motion.p>
        ) : null}
        <motion.h1
          variants={fadeUp}
          className="font-serif text-4xl font-medium leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
        >
          {title}
        </motion.h1>
        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-light"
        >
          {description}
        </motion.p>
      </motion.div>
    </section>
  );
}
