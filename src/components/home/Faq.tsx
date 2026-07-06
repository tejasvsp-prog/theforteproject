"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import { signal } from "@/lib/motion";
import { faqs } from "@/lib/site";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28 lg:py-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="t-kicker text-accent">Questions</p>
          <h2 className="t-h2 mt-5">Good to know.</h2>
          <p className="t-body mt-6 max-w-xs text-ink/70">
            Can&apos;t find what you&apos;re looking for? Just say so on the
            interest form and we&apos;ll answer.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-8">
          <ul className="border-t hairline">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} className="border-b hairline">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="t-h3 text-[1.15rem] sm:text-[1.3rem]">
                      {f.q}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: signal }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/15 text-accent"
                    >
                      <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none">
                        <path d="M8 2v12M2 8h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                      </svg>
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: signal }}
                        className="overflow-hidden"
                      >
                        <p className="t-body max-w-prose pb-6 pr-12 text-ink/75">
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
