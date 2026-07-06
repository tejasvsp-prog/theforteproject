"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { reveal, revealStagger } from "@/lib/motion";
import { roadmap } from "@/lib/site";
import { FloatingNotes } from "@/components/decor/MusicArt";

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-accent text-paper">
      <FloatingNotes className="opacity-60" />
      <div className="wrap relative py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="t-kicker text-paper/80">Get started</p>
          <p className="t-display mt-6 text-paper">
            Learn music, or teach it. Either way, it&apos;s free.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="/apply" variant="onAccent">
              Sign up for lessons
              <span aria-hidden>→</span>
            </Button>
            <Button href="/volunteer" variant="onDark">
              Volunteer to teach
            </Button>
          </div>
        </Reveal>

        {/* Honest "what's next" — plans, clearly framed as plans */}
        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-16 border-t border-paper/20 pt-8"
        >
          <motion.p variants={reveal} className="t-caption not-italic uppercase tracking-[0.16em] text-paper/70">
            Right now we&apos;re fully virtual. What we hope to add:
          </motion.p>
          <motion.ul variants={reveal} className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {roadmap.map((r) => (
              <li key={r} className="t-h3 text-paper/90">
                {r}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
