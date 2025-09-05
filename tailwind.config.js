/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        primary: "#3b82f6",
        "primary-dark": "#2563eb", 
        secondary: "#8b5cf6",
        "secondary-dark": "#7c3aed",
      },
      backgroundColor: {
        light: "#ffffff",
        dark: "#0f172a",
      },
      textColor: {
        light: "#171717",
        dark: "#f8fafc",
      },
      borderColor: {
        light: "#e2e8f0",
        dark: "#334155",
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in forwards",
        slideUp: "slideUp 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        }
      }
    },
  },
  plugins: [],
};