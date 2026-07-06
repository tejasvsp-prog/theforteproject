"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { reveal, revealStagger } from "@/lib/motion";
import { steps } from "@/lib/site";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative border-y border-white/6 bg-surface py-20 md:py-28">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">How it works</p>
          <h2 className="t-h2 mt-5">Signing up takes about a minute.</h2>
        </Reveal>

        <motion.ol
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3"
        >
          {/* connecting line on desktop */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-[28px] hidden h-px bg-gradient-to-r from-accent/40 via-white/10 to-transparent md:block"
          />
          {steps.map((s) => (
            <motion.li key={s.n} variants={reveal} className="relative">
              <span className="glass relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl t-numeral text-[1.5rem] leading-none text-accent shadow-glow">
                {s.n.replace(/^0/, "")}
              </span>
              <h3 className="t-h3 mt-6">{s.title}</h3>
              <p className="t-body mt-2.5 max-w-xs text-mute">{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
