import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Editorial palette — 2 primaries (charcoal ink on warm paper) and 3
    // supporting tones (terracotta accent, warm stone gray, hairline sand).
    // Contrast comes from deep charcoal against muted terracotta, not from
    // flat "app" colors.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "#F7F4EE", // warm paper field
      ink: "#232019", // deep charcoal
      accent: "#A34A2A", // muted terracotta
      stone: "#6E6759", // warm secondary text
      line: "#DBD5C9", // hairline sand
      // Aliases so no stray class ever renders un-themed; they resolve into
      // the same five tones above.
      night: "#232019",
      surface: "#F1EDE2",
      panel: "#F1EDE2",
      cream: "#F1EDE2",
      mute: "#6E6759",
      faint: "#8A8271",
      volt: "#A34A2A",
      honey: "#A34A2A",
      ember: "#A34A2A",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        text: ["var(--font-text)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1360px",
        prose: "62ch",
        measure: "52ch",
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
