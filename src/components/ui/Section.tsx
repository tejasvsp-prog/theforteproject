import type { ElementType, ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Adds a subtle staff-line texture behind the content. */
  staff?: boolean;
  as?: ElementType;
  containerClassName?: string;
}

/**
 * Consistent vertical rhythm + centered content container used by every
 * page section. Keeps whitespace generous and layouts aligned.
 */
export default function Section({
  id,
  children,
  className = "",
  staff = false,
  as: Tag = "section",
  containerClassName = "",
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={`relative py-20 sm:py-24 lg:py-28 ${
        staff ? "staff-lines" : ""
      } ${className}`}
    >
      <div className={`container-content ${containerClassName}`}>{children}</div>
    </Tag>
  );
}
