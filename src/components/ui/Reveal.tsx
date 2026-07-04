"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { reveal, revealStagger } from "@/lib/motion";

type Tag = "div" | "section" | "ul" | "ol" | "li" | "span" | "p";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: Tag;
  /** Use the stagger container instead of a single element reveal. */
  stagger?: boolean;
  variants?: Variants;
}

/**
 * The site's single, quiet scroll behaviour: content fades and rises 12px
 * once as it first crosses into view. Nothing re-animates on scroll-back.
 * Reduced-motion users get the content immediately.
 */
export default function Reveal({
  children,
  className,
  id,
  as = "div",
  stagger = false,
  variants,
}: RevealProps) {
  const rm = useReducedMotion();
  const Tag = motion[as];
  return (
    <Tag
      id={id}
      className={className}
      variants={variants ?? (stagger ? revealStagger : reveal)}
      initial={rm ? false : "hidden"}
      whileInView={rm ? undefined : "show"}
      animate={rm ? "show" : undefined}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </Tag>
  );
}

/** A child item for use inside a `stagger` Reveal. */
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
    <Tag className={className} variants={reveal}>
      {children}
    </Tag>
  );
}
