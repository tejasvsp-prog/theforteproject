import type { Variants } from "framer-motion";

type Tag = "div" | "section" | "ul" | "ol" | "li" | "span" | "p";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: Tag;
  /** Kept for call-site compatibility; no longer animates. */
  stagger?: boolean;
  variants?: Variants;
}

/**
 * Formerly a scroll-fade wrapper. The editorial redesign renders content
 * statically — no entrance animations — so this is now a plain semantic
 * wrapper that keeps every call site working.
 */
export default function Reveal({ children, className, id, as = "div" }: RevealProps) {
  const Tag = as;
  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  );
}

/** Static child wrapper, kept for compatibility with stagger call sites. */
export function RevealItem({
  children,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: Tag;
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}
