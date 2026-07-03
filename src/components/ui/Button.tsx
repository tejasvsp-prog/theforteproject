import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type Variant = "primary" | "secondary" | "ghost" | "gold";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy text-white shadow-soft hover:bg-navy-600 hover:shadow-soft-lg hover:-translate-y-0.5",
  secondary:
    "bg-white text-navy ring-1 ring-navy/15 shadow-soft hover:ring-gold/50 hover:text-navy hover:-translate-y-0.5",
  // Use on light backgrounds where a warm accent CTA is wanted, or on the navy
  // impact band where navy-on-navy would disappear.
  gold: "bg-gold text-navy shadow-gold hover:bg-gold-light hover:-translate-y-0.5",
  // Intended for dark backgrounds — white text + a soft white outline.
  ghost:
    "bg-transparent text-white ring-1 ring-white/50 hover:bg-white/10 hover:ring-white/80",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className">;

type ButtonAsButton = CommonProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

function classes(variant: Variant, size: Size, className?: string) {
  return [base, variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
}

export default function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className } = props;

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, size: _s, className: _c, ...rest } =
      props;
    const cls = classes(variant, size, className);
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...rest}
        >
          {props.children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {props.children}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, ...rest } =
    props as ButtonAsButton;
  return (
    <button className={classes(variant, size, className)} {...rest}>
      {props.children}
    </button>
  );
}
