import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Warm editorial — an inviting ivory field, soft espresso ink, and warm
    // clay + honey accents. Human and hand-mixed, not machined spot-ink.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "#F6EFE1", // warm ivory field
      cream: "#FCF8EF", // lighter raised card surface
      ink: "#2A2320", // warm espresso (not pure black)
      accent: "#B44A2C", // terracotta — primary accent (keeps token name)
      honey: "#C8973F", // muted gold — secondary warm accent
      sage: "#3F5647", // deep muted green — occasional cool relief
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        text: ["var(--font-text)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1440px",
        prose: "64ch",
        measure: "52ch",
      },
      borderRadius: {
        xl: "0.9rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 18px 48px -24px rgba(42, 35, 32, 0.35)",
        card: "0 2px 0 rgba(42,35,32,0.04), 0 24px 60px -32px rgba(42, 35, 32, 0.4)",
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
