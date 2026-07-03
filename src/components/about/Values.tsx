"use client";

import { motion } from "framer-motion";
import {
  Globe,
  HeartHandshake,
  Users,
  Sprout,
  type LucideIcon,
} from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { stagger, fadeUp } from "@/lib/motion";

interface Value {
  icon: LucideIcon;
  title: string;
  text: string;
}

const values: Value[] = [
  {
    icon: Globe,
    title: "Access",
    text: "Music education should never depend on a family's income or postal code.",
  },
  {
    icon: HeartHandshake,
    title: "Mentorship",
    text: "Near-peer teachers who inspire students as much as they instruct them.",
  },
  {
    icon: Users,
    title: "Community",
    text: "A global network of students and volunteers who lift one another up.",
  },
  {
    icon: Sprout,
    title: "Growth",
    text: "Building skill, confidence, and a lifelong love of making music.",
  },
];

export default function Values() {
  return (
    <Section id="values" className="bg-cream" staff>
      <SectionHeading
        eyebrow="What We Believe"
        title="The values behind every lesson"
        align="left"
        className="max-w-xl"
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {values.map((v) => (
          <motion.div
            key={v.title}
            variants={fadeUp}
            className="flex flex-col gap-4 rounded-3xl border border-navy/5 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-gold">
              <v.icon className="h-5 w-5" aria-hidden />
            </span>
            <h3 className="font-serif text-xl text-navy">{v.title}</h3>
            <p className="text-sm leading-relaxed text-charcoal-light">
              {v.text}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
