"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { signal } from "@/lib/motion";
import { faqs } from "@/lib/site";

/**
 * Questions as a hairline ledger. The only motion on the page is this
 * disclosure — functional, not decorative.
 */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t hairline bg-surface">
      <div className="wrap grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-navy">Questions</p>
          <h2 className="t-h2 mt-5">Good to know.</h2>
          <p className="t-body mt-6 max-w-xs text-stone">
            Can&apos;t find what you&apos;re looking for? Just say so on the
            interest form and we&apos;ll answer.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-7 lg:col-start-6">
          <ul className="border-t-2 border-ink">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b hairline">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-baseline justify-between gap-6 py-5 text-left"
                  >
                    <span className="t-h3 text-[1.1rem] sm:text-[1.2rem]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="font-display text-xl italic leading-none text-navy"
                    >
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: signal }}
                        className="overflow-hidden"
                      >
                        <p className="t-body max-w-prose pb-6 pr-10 text-stone">
                          {f.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
