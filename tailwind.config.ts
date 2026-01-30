import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Metallic Blue (from logo)
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb", // Main blue
          700: "#1d4ed8",
          800: "#1e40af", // Deep blue
          900: "#1e3a8a",
          950: "#172554",
        },
        // Metallic Grey/Silver (from logo)
        accent: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b", // Main grey
          600: "#475569",
          700: "#334155", // Dark grey
          800: "#1e293b",
          900: "#0f172a",
        },
        // Metallic gradients for logo-inspired elements
        metallic: {
          blue: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
          grey: "linear-gradient(135deg, #64748b 0%, #334155 100%)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        'gradient-metallic-blue': 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
        'gradient-metallic-grey': 'linear-gradient(135deg, #64748b 0%, #334155 100%)',
        'gradient-lock': 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #64748b 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
