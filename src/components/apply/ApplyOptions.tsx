"use client";

import { motion } from "framer-motion";
import { Guitar, PenLine, ArrowRight, type LucideIcon } from "lucide-react";
import Button from "@/components/ui/Button";
import { stagger, fadeUp } from "@/lib/motion";
import { forms, type FormKey } from "@/lib/site";

interface Option {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  formKey: FormKey;
  /** Anchor of the embedded form to scroll to as a fallback. */
  formAnchor: string;
}

const options: Option[] = [
  {
    id: "performance",
    icon: Guitar,
    title: "I Have an Instrument",
    description:
      "Students with access to an instrument can receive individualized performance-focused instruction.",
    cta: "Apply for Performance Lessons",
    formKey: "performance",
    formAnchor: "#performance-form",
  },
  {
    id: "theory",
    icon: PenLine,
    title: "I Don't Have an Instrument",
    description:
      "Students without an instrument can receive lessons in music theory, composition, rhythm, and ear training.",
    cta: "Apply for Theory Lessons",
    formKey: "theory",
    formAnchor: "#theory-form",
  },
];

export default function ApplyOptions() {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-6 lg:grid-cols-2"
    >
      {options.map((opt) => {
        const share = forms[opt.formKey].shareUrl;
        return (
          <motion.article
            key={opt.id}
            id={opt.id}
            variants={fadeUp}
            className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-3xl border border-navy/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg sm:p-10"
          >
            <div
              className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gold/10 blur-2xl"
              aria-hidden
            />
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-gold">
              <opt.icon className="h-6 w-6" aria-hidden />
            </span>
            <h2 className="mt-6 font-serif text-2xl text-navy">{opt.title}</h2>
            <p className="mt-3 leading-relaxed text-charcoal-light">
              {opt.description}
            </p>
            <div className="mt-8">
              <Button
                href={share || opt.formAnchor}
                external={Boolean(share)}
                size="lg"
              >
                {opt.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
            </div>
          </motion.article>
        );
      })}
    </motion.div>
  );
}
