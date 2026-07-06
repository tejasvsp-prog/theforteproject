import type { Metadata, Viewport } from "next";
import { Fraunces, Newsreader, Caveat } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Display voice — Fraunces, a warm, high-contrast "old-style" serif with real
// optical character. Human and editorial rather than machined/Swiss.
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz", "WONK"],
  display: "swap",
  variable: "--font-display",
});

// Text voice — humanist literary serif for body, lead, and pull-quotes.
const text = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-text",
});

// Hand voice — used sparingly for margin notes and asides, the way a real
// person would scribble in the margin. Never for anything load-bearing.
const script = Caveat({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-script",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "music education",
    "nonprofit",
    "free music lessons",
    "youth music",
    "virtual music lessons",
    "student-led nonprofit",
    "The Forte Project",
  ],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#141210",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable} ${script.variable}`}>
      <body className="min-h-screen bg-paper text-ink">
        {/* Without JS, framer never runs — force all animated content visible. */}
        <noscript>
          <style>{`[data-anim]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
