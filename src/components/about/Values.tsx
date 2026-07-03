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
        className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4"
      >
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            variants={fadeUp}
            className="group flex flex-col gap-4 border-t border-navy/15 pt-6 transition-colors duration-500 hover:border-gold"
          >
            <div className="flex items-center justify-between">
              <v.icon
                className="h-5 w-5 text-gold-dark"
                aria-hidden
              />
              <span className="font-serif text-sm text-navy/25">
                0{i + 1}
              </span>
            </div>
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
