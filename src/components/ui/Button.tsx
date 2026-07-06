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

const base =
  "group relative inline-flex select-none items-center justify-center gap-2.5 rounded-full px-7 py-3.5 t-button transition-all duration-300 ease-signal hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Amber pill with a warm glow — the primary call to action.
  primary:
    "bg-accent text-night shadow-[0_10px_40px_-12px_rgba(255,159,69,0.6)] hover:bg-honey hover:shadow-[0_16px_50px_-12px_rgba(255,159,69,0.8)] focus-visible:outline-accent",
  // Glassy outline on the dark field.
  secondary:
    "glass text-ink hover:border-accent/50 hover:text-accent focus-visible:outline-accent",
  // Same glass treatment, used on already-dark panels/footer.
  onDark:
    "glass text-ink hover:border-accent/50 hover:text-accent focus-visible:outline-accent",
  // On the amber band: a solid dark pill.
  onAccent:
    "bg-night text-ink hover:bg-surface focus-visible:outline-night",
};

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", className = "" } = props;
  const cls = `${base} ${variants[variant]} ${className}`;

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
