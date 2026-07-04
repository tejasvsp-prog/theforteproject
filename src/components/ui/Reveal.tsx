"use client";

import { useEffect, useState } from "react";
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
 *
 * Reduced motion is gated behind a mount flag so the server and the first
 * client render agree (no hydration mismatch); reduced-motion users flip to
 * visible after mount. The `data-anim` hook lets a <noscript> style force the
 * content visible when JS never runs.
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
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const reduce = mounted && rm;

  const Tag = motion[as];
  return (
    <Tag
      id={id}
      data-anim
      className={className}
      variants={variants ?? (stagger ? revealStagger : reveal)}
      initial={reduce ? false : "hidden"}
      whileInView={reduce ? undefined : "show"}
      animate={reduce ? "show" : undefined}
      viewport={{ once: true, amount: "some" }}
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
    <Tag data-anim className={className} variants={reveal}>
      {children}
    </Tag>
  );
}
