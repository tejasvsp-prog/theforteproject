import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Adds hover lift + shadow. Use for interactive/feature cards. */
  interactive?: boolean;
}

/**
 * Rounded, softly shadowed surface used across the site for feature,
 * program, and requirement cards.
 */
export default function Card({
  children,
  className = "",
  interactive = false,
}: CardProps) {
  return (
    <div
      className={`rounded-3xl border border-navy/5 bg-white p-8 shadow-soft ${
        interactive
          ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg hover:border-gold/30"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
