import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "secondary" | "onDark";

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
  "group relative inline-flex select-none items-center justify-center gap-2.5 overflow-hidden px-8 py-4 t-button transition-colors duration-300 ease-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

// Each variant: [container classes, sliding-panel bg, label hover color]
const variants: Record<Variant, { box: string; panel: string; label: string }> =
  {
    primary: {
      box: "bg-accent text-paper",
      panel: "bg-ink",
      label: "text-paper",
    },
    secondary: {
      box: "border-[1.5px] border-ink text-ink",
      panel: "bg-ink",
      label: "text-ink group-hover:text-paper",
    },
    onDark: {
      box: "border-[1.5px] border-paper/70 text-paper",
      panel: "bg-paper",
      label: "text-paper group-hover:text-ink",
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
      <span className={`relative z-10 inline-flex items-center gap-2.5 transition-colors duration-200 ${v.label}`}>
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
