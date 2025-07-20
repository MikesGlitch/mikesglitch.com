import tailwindTypography from "@tailwindcss/typography";

import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  darkMode: "class",
  content: [],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1024px",
      "2xl": "1024px",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      // High contrast utilities for accessibility
      "hc-text": "#ffffff",
      "hc-text-muted": "#cccccc",
      "hc-border": "#555555",
      "hc-accent": "#ffd700",
      "hc-bg": "#000000",

      // Modern sophisticated palette
      primary: {
        50: "#f0f7ff",
        100: "#e0efff",
        200: "#b8deff",
        300: "#7cc4ff",
        400: "#38a7ff",
        500: "#0e8aff",
        600: "#006cd8",
        700: "#0054b0",
        800: "#024892",
        900: "#083d79",
        950: "#05284d",
      },
      secondary: {
        50: "#faf8ff",
        100: "#f3efff",
        200: "#e9e2ff",
        300: "#d7c8ff",
        400: "#bfa3ff",
        500: "#a478ff",
        600: "#9050ff",
        700: "#7f3afd",
        800: "#6b2ce8",
        900: "#5a26c4",
        950: "#3b1785",
      },
      accent: {
        50: "#fef3f2",
        100: "#fee4e2",
        200: "#fececa",
        300: "#fdaaa5",
        400: "#fb7970",
        500: "#f34d43",
        600: "#e02e21",
        700: "#bd2318",
        800: "#9c2117",
        900: "#81221a",
        950: "#460e08",
      },
      neutral: {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
      // Keep legacy colors for compatibility
      gray: {
        light: "#f8fafc",
        medium: {
          default: "#475569",
          2: "#334155",
        },
        dark: "#1e293b",
      },
      yellow: "#facc15",
      white: "white",
      black: "black",
      hotpink: "#a478ff",
    },
    fontFamily: {
      sans: ["Inter", "system-ui", "sans-serif"],
      display: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.8s ease-in-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        gradient: "gradient 15s ease infinite",
        spin: "spin 1s linear infinite",
        ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(164, 120, 255, 0.5)" },
          "100%": { boxShadow: "0 0 30px rgba(164, 120, 255, 0.8)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        ping: {
          "75%, 100%": { transform: "scale(2)", opacity: "0" },
        },
        pulse: {
          "50%": { opacity: ".5" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "card-gradient":
          "linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)",
      },
      backdropBlur: {
        xs: "2px",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: "#334155",
            lineHeight: "1.75",
          },
        },
      },
    },
  },
  plugins: [tailwindTypography],
};
