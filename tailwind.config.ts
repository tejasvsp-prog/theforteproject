import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Brand palette, sampled from the Forte Project logo: a dusty-pink field,
    // deep record-navy, coral label, light-blue grooves, and near-black type.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "#F6E2E0", // dusty pink field (logo background)
      ink: "#1E1D24", // near-black, like the forte "f"
      navy: "#2E3A66", // the record
      accent: "#E97862", // coral label
      sky: "#A5C3DE", // groove highlights — use sparingly
      stone: "#7A6A6E", // muted mauve-gray text
      line: "#E4C9C7", // pink hairline
      // Aliases so no stray class renders un-themed.
      night: "#1E1D24",
      surface: "#FBF4F2",
      panel: "#FBF4F2",
      cream: "#FBF4F2",
      mute: "#7A6A6E",
      faint: "#938184",
      volt: "#2E3A66",
      honey: "#E97862",
      ember: "#E97862",
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
