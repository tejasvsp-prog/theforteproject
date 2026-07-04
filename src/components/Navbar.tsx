"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { nav, siteConfig } from "@/lib/site";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
      className="group relative t-button text-ink/70 transition-colors duration-200 hover:text-ink"
    >
      {label}
      <span
        className={`absolute -bottom-1.5 left-0 h-[2px] w-full origin-left bg-accent transition-transform duration-200 ease-signal ${
          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink bg-paper">
      <nav
        className="wrap flex h-[72px] items-center justify-between"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="transition-opacity hover:opacity-70"
          aria-label={`${siteConfig.name} — home`}
        >
          <Logo />
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              active={pathname.startsWith(item.href)}
            />
          ))}
          <Button href="/contact" className="px-6 py-3">
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-signal ${
              open ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-ink transition-transform duration-300 ease-signal ${
              open ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col bg-paper md:hidden"
          >
            <div className="wrap flex flex-1 flex-col justify-center gap-2 pb-24">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i + 0.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={item.href}
                    className="t-display block border-b py-5 hairline"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * nav.length + 0.05 }}
                className="mt-8"
              >
                <Button href="/contact" className="w-full">
                  Contact Us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
