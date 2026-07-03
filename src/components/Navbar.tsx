"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Music2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { nav, siteConfig } from "@/lib/site";
import Button from "./ui/Button";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-navy/10 bg-cream/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className="container-content flex h-16 items-center justify-between sm:h-20"
        aria-label="Primary"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5"
          aria-label={`${siteConfig.name} home`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy text-gold transition-colors group-hover:bg-navy-600">
            <Music2 className="h-5 w-5" aria-hidden />
          </span>
          <span className="heading-serif text-lg leading-none sm:text-xl">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition-colors ${
                  active
                    ? "text-navy"
                    : "text-charcoal-light hover:text-navy"
                }`}
              >
                {item.label}
                {active ? (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-gold"
                  />
                ) : null}
              </Link>
            );
          })}
          <Button href="/contact" size="md">
            Contact Us
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-navy/10 bg-cream/95 backdrop-blur-md md:hidden"
          >
            <div className="container-content flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-lg px-3 py-3 text-base font-medium text-charcoal-light hover:bg-white hover:text-navy"
                >
                  {item.label}
                </Link>
              ))}
              <Button href="/contact" className="mt-2">
                Contact Us
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
