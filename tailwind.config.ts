import type { Config } from "tailwindcss";

const oklch = (variable: string) => `oklch(var(${variable}) / <alpha-value>)`;

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
        xl: "2.5rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        border: oklch("--border"),
        input: oklch("--input"),
        ring: oklch("--ring"),
        background: oklch("--background"),
        foreground: oklch("--foreground"),
        primary: {
          DEFAULT: oklch("--primary"),
          foreground: oklch("--primary-foreground"),
        },
        surface: {
          soft: oklch("--surface-soft"),
        },
        secondary: {
          DEFAULT: oklch("--secondary"),
          foreground: oklch("--secondary-foreground"),
        },
        muted: {
          DEFAULT: oklch("--muted"),
          foreground: oklch("--muted-foreground"),
        },
        accent: {
          DEFAULT: oklch("--accent"),
          foreground: oklch("--accent-foreground"),
        },
        destructive: {
          DEFAULT: oklch("--destructive"),
          foreground: oklch("--destructive-foreground"),
        },
        card: {
          DEFAULT: oklch("--card"),
          foreground: oklch("--card-foreground"),
        },
        popover: {
          DEFAULT: oklch("--popover"),
          foreground: oklch("--popover-foreground"),
        },
        chart: {
          "1": oklch("--chart-1"),
          "2": oklch("--chart-2"),
          "3": oklch("--chart-3"),
          "4": oklch("--chart-4"),
          "5": oklch("--chart-5"),
        },
        sidebar: {
          DEFAULT: oklch("--sidebar"),
          foreground: oklch("--sidebar-foreground"),
          primary: oklch("--sidebar-primary"),
          "primary-foreground": oklch("--sidebar-primary-foreground"),
          accent: oklch("--sidebar-accent"),
          "accent-foreground": oklch("--sidebar-accent-foreground"),
          border: oklch("--sidebar-border"),
          ring: oklch("--sidebar-ring"),
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 8px)",
        sm: "calc(var(--radius) - 12px)",
        pill: "999px",
      },
      borderWidth: {
        action: "0.25rem",
        6: "0.375rem",
        "action-sm": "0.125rem",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "Poppins", "ui-sans-serif", "system-ui"],
        accent: ["var(--font-oswald)", "Oswald", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        "1": ["clamp(4.5rem, 10vw, 7.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "2": ["clamp(4rem, 8vw, 7.5rem)", { lineHeight: "0.95", letterSpacing: "0" }],
        "3": ["clamp(2.75rem, 5.5vw, 4.875rem)", { lineHeight: "1.1", letterSpacing: "0" }],
        "4": ["clamp(2rem, 3.5vw, 3.125rem)", { lineHeight: "1.2", letterSpacing: "0" }],
        "5": ["clamp(1.5rem, 2.5vw, 2.5rem)", { lineHeight: "1.2", letterSpacing: "0" }],
        "6": ["clamp(1.125rem, 1.7vw, 1.625rem)", { lineHeight: "1.5", letterSpacing: "0" }],
        "7": ["1.125rem", { lineHeight: "1.6", letterSpacing: "0" }],
        "8": ["1rem", { lineHeight: "1.5", letterSpacing: "0" }],
        "9": ["0.8rem", { lineHeight: "1.25", letterSpacing: "0.08em" }],
      },
      spacing: {
        micro: "0.75rem",
        tight: "1rem",
        compact: "1.25rem",
        content: "1.5rem",
        card: "2rem",
        loose: "2.5rem",
        hero: "4rem",
        "hero-lg": "5rem",
        section: "clamp(5rem, 10vw, 9rem)",
      },
      boxShadow: {
        editorial: "var(--shadow-editorial)",
      },
    },
  },
  plugins: [],
};

export default config;
