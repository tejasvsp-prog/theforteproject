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
  "group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden rounded-full px-7 py-3.5 t-button shadow-soft transition-all duration-300 ease-signal hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<
  Variant,
  { box: string; panel: string; label: string }
> = {
  primary: {
    box: "bg-accent text-paper focus-visible:outline-ink",
    panel: "bg-ink",
    label: "text-paper",
  },
  secondary: {
    box: "bg-cream text-ink ring-1 ring-ink/15 shadow-none hover:ring-accent/40 focus-visible:outline-accent",
    panel: "bg-transparent",
    label: "text-ink",
  },
  // On the ink footer.
  onDark: {
    box: "bg-paper text-ink focus-visible:outline-paper",
    panel: "bg-accent",
    label: "text-ink group-hover:text-paper",
  },
  // On the terracotta band: a warm light fill.
  onAccent: {
    box: "bg-paper text-ink focus-visible:outline-paper",
    panel: "bg-ink",
    label: "text-ink group-hover:text-paper",
  },
};

function Inner({ variant, children }: { variant: Variant; children: ReactNode }) {
  const v = variants[variant];
  return (
    <>
      <span
        aria-hidden
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-[350ms] ease-signal group-hover:scale-x-100 ${v.panel}`}
      />
      <span
        className={`relative z-10 inline-flex items-center gap-2.5 transition-colors duration-200 ${v.label}`}
      >
        {children}
      </span>
    </>
  );
}

export default function Button(props: AsLink | AsButton) {
  const { variant = "primary", className = "" } = props;
  const cls = `${base} ${variants[variant].box} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, external, variant: _v, className: _c, children, ...rest } =
      props;
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...rest}>
          <Inner variant={variant}>{children}</Inner>
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        <Inner variant={variant}>{children}</Inner>
      </Link>
    );
  }

  const { variant: _v, className: _c, children, ...rest } = props as AsButton;
  return (
    <button className={cls} {...rest}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}
