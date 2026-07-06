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
              className={`card-panel group relative overflow-hidden rounded-3xl p-8 shadow-card transition-[transform,border-color] duration-500 ease-signal hover:-translate-y-1 sm:p-10 ${
                i === 0 ? "hover:border-accent/40" : "hover:border-volt/40"
              }`}
            >
              <span
                aria-hidden
                className="spotlight pointer-events-none absolute -right-8 -top-12 h-52 w-52 rounded-full opacity-60"
              />
              <p className={`relative t-kicker ${i === 0 ? "text-accent" : "text-volt"}`}>
                {track.label}
              </p>
              <h2 className="relative t-display mt-4 text-[2rem] sm:text-[2.4rem]">
                {track.title}
              </h2>
              <p className="relative t-body mt-4 max-w-md text-mute">
                {track.blurb}
              </p>
              <Link
                href="#form"
                className={`group/link relative mt-8 inline-flex items-center gap-2 t-button ${
                  i === 0 ? "text-accent" : "text-volt"
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
