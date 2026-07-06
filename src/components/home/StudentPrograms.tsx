"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { reveal, revealStagger } from "@/lib/motion";
import { tracks } from "@/lib/site";
import { StaffPhrase } from "@/components/decor/MusicArt";

export default function StudentPrograms() {
  return (
    <section id="tracks" className="relative py-20 md:py-28 lg:py-32">
      <div className="wrap">
        <Reveal className="max-w-2xl">
          <p className="t-kicker text-accent">Two ways to learn</p>
          <h2 className="t-h2 mt-5">
            Whether or not you own an instrument, there&apos;s a way in.
          </h2>
        </Reveal>

        <motion.div
          variants={revealStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8"
        >
          {/* Track 1 — larger glass panel with a glowing staff */}
          <motion.article
            variants={reveal}
            className="card-panel group relative overflow-hidden rounded-3xl p-8 shadow-card transition-[transform,box-shadow] duration-500 ease-signal hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift sm:p-10 lg:col-span-7"
          >
            <span
              aria-hidden
              className="spotlight pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full opacity-70"
            />
            <p className="t-kicker text-accent">{tracks[0].label}</p>
            <h3 className="t-display mt-4 text-[2rem] sm:text-[2.4rem]">
              {tracks[0].title}
            </h3>
            <p className="t-body mt-4 max-w-md text-mute">{tracks[0].blurb}</p>
            <Link
              href="/apply"
              className="group/link mt-8 inline-flex items-center gap-2 t-button text-accent"
            >
              Sign up
              <span aria-hidden className="transition-transform duration-300 ease-signal group-hover/link:translate-x-1">→</span>
            </Link>
            <div className="pointer-events-none absolute -bottom-6 -right-4 w-64 text-ink/10 transition-transform duration-500 ease-signal group-hover:translate-x-2 sm:w-80">
              <StaffPhrase className="h-auto w-full" />
            </div>
          </motion.article>

          {/* Track 2 — amber-lit panel, offset */}
          <motion.article
            variants={reveal}
            className="card-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl p-8 shadow-card transition-[transform,box-shadow] duration-500 ease-signal hover:-translate-y-1 hover:border-volt/40 hover:shadow-lift sm:p-10 lg:col-span-5"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-2xl"
              style={{ background: "radial-gradient(circle, rgba(124,124,255,0.4), rgba(8,8,11,0) 70%)" }}
            />
            <div className="relative">
              <p className="t-kicker text-volt">{tracks[1].label}</p>
              <h3 className="t-display mt-4 text-[2rem] sm:text-[2.4rem]">
                {tracks[1].title}
              </h3>
              <p className="t-body mt-4 text-mute">{tracks[1].blurb}</p>
            </div>
            <Link
              href="/apply"
              className="group/link relative mt-8 inline-flex items-center gap-2 t-button text-volt"
            >
              Sign up
              <span aria-hidden className="transition-transform duration-300 ease-signal group-hover/link:translate-x-1">→</span>
            </Link>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
