import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark" | "onAccent";

interface Common {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type AsLink = Common & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

type AsButton = Common &
  Omit<ComponentPropsWithoutRef<"button">, "className" | "children"> & {
    href?: undefined;
  };

// Square-set editorial buttons — no pills, no glows, no drop shadows.
const solid =
  "group inline-flex select-none items-center justify-center gap-2.5 px-6 py-3.5 t-button transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Record-navy block that warms to coral.
  primary: `${solid} bg-navy text-paper hover:bg-accent hover:text-ink focus-visible:outline-accent`,
  // Outlined companion to primary.
  secondary: `${solid} border border-navy/40 bg-transparent text-navy hover:border-navy hover:bg-navy hover:text-paper focus-visible:outline-accent`,
  // On the navy footer: pink block.
  onDark: `${solid} bg-paper text-navy hover:bg-accent hover:text-ink focus-visible:outline-paper`,
  onAccent: `${solid} bg-paper text-navy hover:bg-navy hover:text-paper focus-visible:outline-paper`,
};

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", className = "" } = props;
  const cls = `${variants[variant]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, className: _c, children, ...rest } =
      props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {children}
      </Link>
    );
  }

  const { variant: _v, className: _c, children, ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
