"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { reveal, revealStagger } from "@/lib/motion";
import { volunteerReqs } from "@/lib/site";

export default function Requirements() {
  return (
    <section id="requirements" className="relative py-20 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-accent">What we ask</p>
          <h2 className="t-h2 mt-5">Two things, really.</h2>
          <p className="t-body mt-6 max-w-xs text-mute">
            If both are true, you&apos;re exactly who we&apos;re looking for.
          </p>
        </Reveal>

        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2 lg:col-span-8"
        >
          {volunteerReqs.map((r, i) => (
            <motion.div
              key={r.title}
              variants={reveal}
              className="card-panel rounded-3xl p-8 shadow-card transition-[transform,border-color] duration-500 ease-signal hover:-translate-y-1 hover:border-accent/40"
            >
              <span className="t-numeral text-[2.4rem] leading-none text-accent">
                {String(i + 1)}
              </span>
              <h3 className="t-h3 mt-4">{r.title}</h3>
              <p className="t-body mt-2.5 text-mute">{r.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
