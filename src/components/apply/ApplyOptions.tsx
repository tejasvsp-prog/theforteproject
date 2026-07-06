"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reveal, revealStagger } from "@/lib/motion";
import { tracks } from "@/lib/site";

/**
 * The two tracks, shown as a choice — both lead to the same single interest
 * form below. On the form, students note whether they already have an
 * instrument.
 */
export default function ApplyOptions() {
  return (
    <section className="relative py-8 md:py-12">
      <div className="wrap">
        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 md:grid-cols-2 md:gap-8"
        >
          {tracks.map((track, i) => (
            <motion.div
              key={track.id}
              variants={reveal}
              className={`group relative overflow-hidden rounded-3xl p-8 shadow-card sm:p-10 ${
                i === 0
                  ? "border border-ink/10 bg-cream"
                  : "bg-ink text-paper"
              }`}
            >
              <p className={`t-kicker ${i === 0 ? "text-accent" : "text-honey"}`}>
                {track.label}
              </p>
              <h2
                className={`t-display mt-4 text-[2rem] sm:text-[2.4rem] ${
                  i === 0 ? "" : "text-paper"
                }`}
              >
                {track.title}
              </h2>
              <p
                className={`t-body mt-4 max-w-md ${
                  i === 0 ? "text-ink/75" : "text-paper/75"
                }`}
              >
                {track.blurb}
              </p>
              <Link
                href="#form"
                className={`group/link mt-8 inline-flex items-center gap-2 t-button ${
                  i === 0 ? "text-accent" : "text-honey"
                }`}
              >
                Fill out the form
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-signal group-hover/link:translate-x-1.5"
                >
                  ↓
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
