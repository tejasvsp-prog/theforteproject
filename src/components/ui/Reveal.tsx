"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

type Tag = "div" | "section" | "ul" | "ol" | "li" | "span" | "p";

const ease = [0.16, 1, 0.3, 1] as const;

const rise: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: Tag;
  /** Stagger direct RevealItem children instead of moving as one block. */
  stagger?: boolean;
  variants?: Variants;
}

/**
 * The site's single scroll behaviour: content settles in with a quiet
 * 10px rise, once. Server and client both render the hidden state, so there
 * is no hydration mismatch; a <noscript> rule in the layout keeps content
 * visible when JS never runs; reduced-motion users see everything statically.
 */
export default function Reveal({
  children,
  className,
  id,
  as = "div",
  stagger: staggered = false,
  variants,
}: RevealProps) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  if (reduce) {
    const Plain = as;
    return (
      <Plain id={id} className={className}>
        {children}
      </Plain>
    );
  }
  return (
    <Tag
      id={id}
      data-anim
      className={className}
      variants={variants ?? (staggered ? stagger : rise)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
    >
      {children}
    </Tag>
  );
}

/** A staggered child for use inside a `stagger` Reveal. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Tag = motion[as];
  return (
    <Tag data-anim className={className} variants={rise}>
      {children}
    </Tag>
  );
}
