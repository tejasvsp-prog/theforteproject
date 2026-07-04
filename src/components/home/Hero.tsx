"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";
import { signal } from "@/lib/motion";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  const rm = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  // Gate reduced-motion behind mount so SSR and first client render agree.
  const reduce = mounted && rm;

  // One master timeline: kicker → hairline draw → H1 lines → underline →
  // lead → CTAs. Explicit delays keep the curtain-lift precise.
  const t = (delay: number, duration = 0.6) =>
    reduce ? { duration: 0 } : { delay, duration, ease: signal };

  const line = (delay: number) =>
    reduce
      ? { initial: { y: "0%" }, animate: { y: "0%" } }
      : {
          initial: { y: "115%" },
          animate: { y: "0%" },
          transition: { delay, duration: 0.72, ease: signal },
        };

  const fade = (delay: number, y = 14) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.6, ease: signal },
        };

  return (
    <section className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40 lg:pt-44">
      <div className="wrap">
        {/* Kicker */}
        <motion.p data-anim className="t-kicker text-accent" {...fade(0)}>
          Est. {siteConfig.founded} — A student-led music nonprofit
        </motion.p>

        {/* Hairline that draws left-to-right */}
        <motion.div
          aria-hidden
          className="mt-6 h-px w-full origin-left bg-ink"
          initial={rm ? { scaleX: 1 } : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={t(0.15, 0.6)}
        />

        {/* Hero headline — masked line reveal */}
        <h1 className="t-hero mt-8 max-w-[16ch]">
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span data-anim className="block" {...line(0.3)}>
              Music education,
            </motion.span>
          </span>
          <span className="block overflow-hidden pb-[0.08em]">
            <motion.span data-anim className="block" {...line(0.4)}>
              without{" "}
              <span className="relative inline-block">
                borders.
                <motion.span
                  data-anim
                  aria-hidden
                  className="absolute -bottom-[0.06em] left-0 h-[0.09em] w-full origin-left bg-accent"
                  initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={t(1.0, 0.5)}
                />
              </span>
            </motion.span>
          </span>
        </h1>

        {/* Lead */}
        <motion.p
          data-anim
          className="t-lead mt-8 max-w-measure text-ink/80"
          {...fade(0.72)}
        >
          We connect talented high-school musicians with underprivileged youth
          around the world — through free, live virtual lessons that open doors
          most students never get to walk through.
        </motion.p>

        {/* CTAs */}
        <motion.div
          data-anim
          className="mt-10 flex flex-col gap-4 sm:flex-row"
          {...fade(0.86)}
        >
          <Button href="/volunteer">
            Become a Volunteer
            <span aria-hidden>→</span>
          </Button>
          <Button href="/apply" variant="secondary">
            Apply for Lessons
          </Button>
        </motion.div>
      </div>

      {/* Rotated corner caption pooled in the negative space */}
      <motion.span
        aria-hidden
        className="t-kicker pointer-events-none absolute bottom-10 right-6 hidden text-ink/40 [writing-mode:vertical-rl] lg:block"
        {...fade(1.1)}
      >
        Free · Live on Zoom · Worldwide
      </motion.span>
    </section>
  );
}
