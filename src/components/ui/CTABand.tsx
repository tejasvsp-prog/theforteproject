"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import FloatingNotes from "@/components/decor/FloatingNotes";
import { fadeUp, stagger } from "@/lib/motion";

interface CTAAction {
  href: string;
  label: string;
  variant?: "gold" | "ghost";
}

interface CTABandProps {
  title: string;
  description?: string;
  actions: CTAAction[];
}

/** Reusable navy call-to-action band used across interior pages. */
export default function CTABand({ title, description, actions }: CTABandProps) {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-white sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(193,154,75,0.20) 0%, rgba(18,35,63,0) 70%)",
        }}
      />
      <div
        className="staff-lines pointer-events-none absolute inset-0 opacity-[0.07]"
        aria-hidden
      />
      <FloatingNotes className="opacity-60" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="container-content relative flex flex-col items-center text-center"
      >
        <motion.h2
          variants={fadeUp}
          className="heading-serif max-w-2xl text-3xl leading-tight text-white sm:text-4xl"
        >
          {title}
        </motion.h2>
        {description ? (
          <motion.p
            variants={fadeUp}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/70"
          >
            {description}
          </motion.p>
        ) : null}
        <motion.div
          variants={fadeUp}
          className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
        >
          {actions.map((a) => (
            <Button
              key={a.href}
              href={a.href}
              size="lg"
              variant={a.variant ?? "gold"}
            >
              {a.label}
            </Button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
