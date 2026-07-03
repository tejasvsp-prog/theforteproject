"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Button from "@/components/ui/Button";
import MusicStaff from "@/components/decor/MusicStaff";
import FloatingNotes from "@/components/decor/FloatingNotes";
import { fadeUp, stagger } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 pb-20 sm:pt-32 lg:pt-40 lg:pb-28">
      {/* Soft radial gradient wash */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 0%, rgba(193,154,75,0.12) 0%, rgba(250,249,246,0) 70%)",
        }}
      />
      <div className="staff-lines pointer-events-none absolute inset-x-0 top-1/2 h-40 opacity-40" aria-hidden />
      <FloatingNotes />

      <div className="container-content relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-gold-dark shadow-soft"
          >
            <Globe className="h-3.5 w-3.5" aria-hidden />
            A youth-led music education initiative
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="heading-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl"
          >
            Music Education
            <span className="relative mt-1 block text-navy">
              Without Borders
              <svg
                className="absolute -bottom-3 left-1/2 h-3 w-56 -translate-x-1/2 text-gold"
                viewBox="0 0 220 12"
                fill="none"
                aria-hidden
              >
                <path
                  d="M2 8C40 3 90 3 128 6C160 8 196 6 218 3"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-2xl text-lg leading-relaxed text-charcoal-light"
          >
            Connecting talented high school musicians with underprivileged youth
            around the world through free virtual music education.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Button href="/volunteer" size="lg">
              Become a Volunteer
            </Button>
            <Button href="/apply" size="lg" variant="secondary">
              Apply for Lessons
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl text-navy/80"
        >
          <MusicStaff className="h-auto w-full" />
        </motion.div>
      </div>
    </section>
  );
}
