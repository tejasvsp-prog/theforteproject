"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { reveal, revealStagger } from "@/lib/motion";
import { roadmap } from "@/lib/site";
import { FloatingNotes } from "@/components/decor/MusicArt";

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden py-6">
      <div className="wrap">
        <div
          className="relative overflow-hidden rounded-[2rem] px-8 py-16 text-night md:px-16 md:py-20"
          style={{ background: "linear-gradient(135deg, #FFB673 0%, #FF9F45 40%, #FF6A3D 100%)" }}
        >
        <span
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-16 h-72 w-72 rounded-full opacity-40 blur-2xl"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.7), rgba(255,159,69,0) 70%)" }}
        />
        <FloatingNotes className="opacity-30" />
        <Reveal className="relative max-w-3xl">
          <p className="t-kicker text-night/80">Get started</p>
          <p className="t-display mt-6 text-night">
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
          className="relative mt-16 border-t border-night/20 pt-8"
        >
          <motion.p variants={reveal} className="t-kicker text-night/70">
            Right now we&apos;re fully virtual. What we hope to add:
          </motion.p>
          <motion.ul variants={reveal} className="mt-5 flex flex-wrap gap-x-8 gap-y-2">
            {roadmap.map((r) => (
              <li key={r} className="t-h3 text-night/90">
                {r}
              </li>
            ))}
          </motion.ul>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
