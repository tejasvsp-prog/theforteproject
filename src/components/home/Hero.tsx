"use client";

import { motion } from "framer-motion";
import { ArrowRight, Video } from "lucide-react";
import Button from "@/components/ui/Button";
import MusicStaff from "@/components/decor/MusicStaff";
import { fadeUp, stagger } from "@/lib/motion";
import { siteConfig, stats } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream pt-28 sm:pt-32 lg:pt-36">
      {/* Warm light source, upper right — anchors the composition off-center. */}
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[38rem] w-[38rem] rounded-full opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(193,154,75,0.16) 0%, rgba(250,249,246,0) 68%)",
        }}
      />

      <div className="container-content relative pb-20 lg:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left — editorial, left-aligned headline block */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="max-w-xl"
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-charcoal-muted"
            >
              <span className="h-px w-8 bg-gold" aria-hidden />
              Est. {siteConfig.founded} · Student-led nonprofit
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-[2.7rem] font-semibold leading-[1.02] tracking-[-0.02em] text-navy sm:text-6xl lg:text-[4rem]"
            >
              Music education,
              <span className="mt-1 block italic font-medium text-gold-dark">
                without borders.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-8 text-lg leading-relaxed text-charcoal-light"
            >
              We connect talented high school musicians with underprivileged
              youth around the world — through free, live virtual lessons that
              open doors most students never get to walk through.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="/volunteer" size="lg">
                Become a Volunteer
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/apply" size="lg" variant="secondary">
                Apply for Lessons
              </Button>
            </motion.div>
          </motion.div>

          {/* Right — navy showcase panel breaks the centered-hero template. */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[1.75rem] bg-navy p-8 shadow-soft-lg sm:p-10">
              <div
                className="staff-lines pointer-events-none absolute inset-0 opacity-[0.12]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-2xl"
                aria-hidden
              />
              <div className="relative flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/90">
                  <Video className="h-3.5 w-3.5 text-gold-light" aria-hidden />
                  Live on Zoom · Always free
                </span>
              </div>

              <div className="relative mt-10 text-gold-light">
                <MusicStaff tone="light" className="h-auto w-full" />
              </div>

              <p className="relative mt-8 font-serif text-xl leading-snug text-white">
                &ldquo;Every student deserves the chance to make music.&rdquo;
              </p>
              <p className="relative mt-2 text-sm text-white/60">
                — The idea that started The Forte Project
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats rule — proof the eye lands on after the headline. */}
        <motion.dl
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="bg-cream px-6 py-6 text-center sm:text-left"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl text-navy sm:text-4xl">
                {s.value}
              </dd>
              <p className="mt-1 text-sm text-charcoal-muted">{s.label}</p>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
