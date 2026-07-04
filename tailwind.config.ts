import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    // Bone & Signal — three flat spot inks, nothing else.
    colors: {
      transparent: "transparent",
      current: "currentColor",
      paper: "#F4EFE6",
      ink: "#141210",
      accent: "#C7300B",
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        text: ["var(--font-text)", "Georgia", "serif"],
      },
      maxWidth: {
        wrap: "1440px",
        prose: "66ch",
        measure: "52ch",
      },
      borderRadius: {
        none: "0",
      },
      spacing: {
        // 8px-rooted editorial ramp.
        rail: "96px",
        13: "3.25rem",
        26: "6.5rem", // 104px
        42: "10.5rem", // 168px
      },
      transitionTimingFunction: {
        signal: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
