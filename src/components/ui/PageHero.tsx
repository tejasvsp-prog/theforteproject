"use client";

import { motion } from "framer-motion";
import FloatingNotes from "@/components/decor/FloatingNotes";
import { fadeUp, stagger } from "@/lib/motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
}

/** Consistent hero band for interior pages (Volunteer, Apply). */
export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-cream pt-32 pb-16 sm:pt-36 lg:pt-40">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(55% 60% at 50% 0%, rgba(193,154,75,0.12) 0%, rgba(250,249,246,0) 70%)",
        }}
      />
      <FloatingNotes />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content relative mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {eyebrow ? (
          <motion.span variants={fadeUp} className="eyebrow mb-5">
            <span className="h-px w-6 bg-gold/60" aria-hidden />
            {eyebrow}
          </motion.span>
        ) : null}
        <motion.h1
          variants={fadeUp}
          className="heading-serif text-4xl leading-[1.1] sm:text-5xl lg:text-[3.25rem]"
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
