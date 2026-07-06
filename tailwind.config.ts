import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Dark, modern, "concert-stage" system — a deep near-black room lit by
    // warm amber stage light and a cool electric edge. Sleek like Linear /
    // Vercel / Raycast, warm because it's about music.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      // Surfaces (dark → light lift). NB: avoid the name "base" — it collides
      // with Tailwind's built-in text-base font-size utility.
      night: "#08080B",    // page background, deepest
      surface: "#0F0F14",  // section background
      panel: "#16161D",    // raised card
      line: "#26262F",     // hairline / border base
      // Text
      ink: "#F4F3F6",      // primary text (near-white)
      mute: "#9A99A6",     // secondary text
      faint: "#6A6A76",    // tertiary / captions
      // Accents
      accent: "#FF9F45",   // warm amber — primary (stage light)
      ember: "#FF6A3D",    // coral-ember — hot secondary
      volt: "#7C7CFF",     // electric violet — cool edge
      // Legacy aliases kept so any stragglers still resolve to sane values
      paper: "#08080B",
      cream: "#16161D",
      honey: "#FFC978",
      sage: "#7C7CFF",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        text: ["var(--font-text)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1440px",
        prose: "62ch",
        measure: "52ch",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        // Depth in the dark: a soft ambient drop plus a faint top highlight.
        soft: "0 24px 60px -28px rgba(0,0,0,0.8)",
        card: "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 70px -34px rgba(0,0,0,0.85)",
        lift: "0 1px 0 rgba(255,255,255,0.08) inset, 0 48px 100px -40px rgba(0,0,0,0.9)",
        glow: "0 0 0 1px rgba(255,159,69,0.25), 0 20px 60px -18px rgba(255,159,69,0.35)",
      },
      spacing: {
        13: "3.25rem",
        26: "6.5rem",
        42: "10.5rem",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
