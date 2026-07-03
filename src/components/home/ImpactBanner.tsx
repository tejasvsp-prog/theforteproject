"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FloatingNotes from "@/components/decor/FloatingNotes";
import { fadeUp, stagger } from "@/lib/motion";

export default function ImpactBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-white sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
        style={{
          background:
            "radial-gradient(50% 60% at 50% 0%, rgba(193,154,75,0.22) 0%, rgba(18,35,63,0) 70%)",
        }}
      />
      <div
        className="staff-lines pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden
      />
      <FloatingNotes className="opacity-70" />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="container-content relative flex flex-col items-center text-center"
      >
        <motion.p
          variants={fadeUp}
          className="heading-serif max-w-3xl text-3xl leading-[1.25] text-white sm:text-4xl lg:text-[2.75rem]"
        >
          Every lesson creates opportunity.
          <br className="hidden sm:block" />
          <span className="text-gold-light">
            {" "}
            Every volunteer inspires a future musician.
          </span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Button href="/volunteer" size="lg" variant="gold">
            Become a Volunteer
          </Button>
          <Button href="/apply" size="lg" variant="ghost">
            Apply for Lessons
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
