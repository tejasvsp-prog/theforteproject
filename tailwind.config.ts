import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#12233f",
          50: "#eef1f6",
          100: "#d3dbe8",
          200: "#a7b6d1",
          300: "#7b92ba",
          400: "#4f6da3",
          500: "#2f4d7f",
          600: "#1c3660",
          700: "#12233f",
          800: "#0c182c",
          900: "#070f1c",
        },
        charcoal: {
          DEFAULT: "#2b2f36",
          light: "#4b515b",
          muted: "#6b7280",
        },
        gold: {
          DEFAULT: "#c19a4b",
          light: "#d8b869",
          soft: "#f2e9d4",
          dark: "#a17f36",
        },
        cream: "#f5f1e8",
        paper: "#fffdf7",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(18, 35, 63, 0.12)",
        "soft-lg": "0 24px 60px -20px rgba(18, 35, 63, 0.18)",
        gold: "0 12px 32px -12px rgba(193, 154, 75, 0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      maxWidth: {
        content: "72rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        drift: "drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
