"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { signal } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { StaffPhrase, KeysArc, FloatingNotes } from "@/components/decor/MusicArt";

const facts = ["Always free", "K–12", "Virtual", "30 min · twice a month"];

export default function Hero() {
  const rm = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && rm;

  const line = (delay: number) =>
    reduce
      ? { initial: { y: "0%" }, animate: { y: "0%" } }
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { delay, duration: 0.72, ease: signal },
        };
  const fade = (delay: number, y = 16) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.6, ease: signal },
        };

  return (
    <section className="relative overflow-hidden pt-32 md:pt-36 lg:pt-40">
      {/* Layered warm background */}
      <div
        className="pointer-events-none absolute -right-40 -top-24 h-[42rem] w-[42rem] rounded-full opacity-70 blur-[2px]"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle, rgba(200,151,63,0.18) 0%, rgba(180,74,44,0.08) 45%, rgba(246,239,225,0) 70%)",
        }}
      />
      <FloatingNotes />

      <div className="wrap relative grid items-center gap-12 pb-16 lg:grid-cols-12 lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.p
            data-anim
            className="t-kicker text-accent"
            {...fade(0)}
          >
            The Forte Project · {siteConfig.location}
          </motion.p>

          <h1 className="t-hero mt-6">
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span data-anim className="block" {...line(0.25)}>
                Free music lessons,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.08em]">
              <motion.span data-anim className="block italic text-accent" {...line(0.35)}>
                taught by students.
              </motion.span>
            </span>
          </h1>

          <motion.p
            data-anim
            className="t-lead mt-7 max-w-measure text-ink/80"
            {...fade(0.7)}
          >
            We're a student-run group in {siteConfig.location}. If you're a K–12
            student who can't afford music lessons — whether you already play or
            you're starting from scratch — we'll teach you, for free.
          </motion.p>

          <motion.div
            data-anim
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            {...fade(0.82)}
          >
            <Button href="/apply">
              Sign up for lessons
              <span aria-hidden>→</span>
            </Button>
            <Button href="/volunteer" variant="secondary">
              Volunteer to teach
            </Button>
          </motion.div>

          {/* Honest fact chips — no invented numbers */}
          <motion.ul
            data-anim
            className="mt-10 flex flex-wrap gap-x-6 gap-y-3"
            {...fade(0.95)}
          >
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2 t-caption not-italic text-ink/60">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Layered illustration */}
        <motion.div
          className="relative lg:col-span-5"
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9, ease: signal }}
        >
          <div className="relative mx-auto max-w-md rounded-3xl border border-ink/10 bg-cream/80 p-8 shadow-card backdrop-blur-sm sm:p-10">
            <div className="text-ink">
              <StaffPhrase className="h-auto w-full" />
            </div>
            <div className="mt-6 flex items-end justify-between">
              <p className="t-caption max-w-[16ch] text-ink/60">
                Every student deserves the chance to make music.
              </p>
              <div className="w-24 text-accent/80">
                <KeysArc className="h-auto w-full" />
              </div>
            </div>
          </div>
          {/* floating accent dot */}
          <motion.span
            aria-hidden
            className="absolute -left-4 top-10 h-8 w-8 rounded-full bg-accent/90 shadow-soft"
            animate={reduce ? {} : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
