"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { signal } from "@/lib/motion";
import { siteConfig } from "@/lib/site";
import { StaffPhrase, FloatingNotes } from "@/components/decor/MusicArt";

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
    <section className="relative overflow-hidden pt-36 md:pt-40 lg:pt-44">
      {/* Stage-light spotlights */}
      <div
        aria-hidden
        className="spotlight pointer-events-none absolute -right-32 -top-40 h-[46rem] w-[46rem] rounded-full"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-24 h-[34rem] w-[34rem] rounded-full opacity-70"
        style={{ background: "radial-gradient(circle, rgba(124,124,255,0.16), rgba(8,8,11,0) 70%)" }}
      />
      <FloatingNotes />

      <div className="wrap relative grid items-center gap-14 pb-20 lg:grid-cols-12 lg:gap-8 lg:pb-28">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.div data-anim {...fade(0)}>
            <span className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(255,159,69,0.7)]" aria-hidden />
              <span className="t-kicker text-mute">{siteConfig.location}</span>
            </span>
          </motion.div>

          <h1 className="t-hero mt-7">
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span data-anim className="block" {...line(0.2)}>
                Free music lessons,
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <motion.span data-anim className="block text-gradient" {...line(0.32)}>
                taught by students.
              </motion.span>
            </span>
          </h1>

          <motion.p
            data-anim
            className="t-lead mt-8 max-w-measure"
            {...fade(0.66)}
          >
            We&apos;re a student-run group in {siteConfig.location}. If you&apos;re
            a K–12 student who can&apos;t afford music lessons — whether you
            already play or you&apos;re starting from scratch — we&apos;ll teach
            you, for free.
          </motion.p>

          <motion.div
            data-anim
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            {...fade(0.8)}
          >
            <Button href="/apply">
              Sign up for lessons
              <span aria-hidden>→</span>
            </Button>
            <Button href="/volunteer" variant="secondary">
              Volunteer to teach
            </Button>
          </motion.div>

          {/* Honest fact chips */}
          <motion.ul
            data-anim
            className="mt-12 flex flex-wrap gap-2.5"
            {...fade(0.92)}
          >
            {facts.map((f) => (
              <li
                key={f}
                className="glass rounded-full px-3.5 py-2 t-caption text-mute"
              >
                {f}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Glowing staff illustration */}
        <motion.div
          className="relative hidden lg:col-span-5 lg:block"
          initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9, ease: signal }}
        >
          <div className="glass relative rounded-3xl p-8 shadow-card">
            <div
              aria-hidden
              className="spotlight pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full"
            />
            <p className="t-kicker text-faint">Now playing</p>
            <div className="relative mt-5 text-ink drop-shadow-[0_0_18px_rgba(255,159,69,0.25)]">
              <StaffPhrase className="h-auto w-full" />
            </div>
            <p className="t-caption mt-6 border-t border-white/8 pt-5 text-mute">
              Every kid deserves the chance to make music — not just the ones who
              can pay for it.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
