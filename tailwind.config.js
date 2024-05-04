/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem", letterSpacing: ".1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem", letterSpacing: ".1rem" }],
        base: ["1rem", { lineHeight: "1.5rem", letterSpacing: "12rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem", letterSpacing: ".1rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem", letterSpacing: ".1rem" }],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            letterSpacing: ".1rem",
            fontWeight: "100",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: ".1rem",
            fontWeight: "200",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: ".1rem",
            fontWeight: "300",
          },
        ],
        "5xl": [
          "3rem",
          {
            lineHeight: "3.75rem",
            letterSpacing: "0.2em",
            fontWeight: "700",
          },
        ],
        "6xl": [
          "3.75rem",
          {
            lineHeight: "4.5rem",
            letterSpacing: ".5em",
            fontWeight: "700",
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "5.5rem",
            letterSpacing: "0.3em",
            fontWeight: "700",
          },
        ],
      },
      animation: {
        "scroll-right": "animate-scroll-right 30s linear infinite",
      },
      backgroundImage: {
        matthieu: "url('/assets/Matthieu.svg')",
        elipseTeal: "url('/assets/backgrounds/elipse-teal-items.svg')",
      },
      keyframes: {
        "animate-scroll-right": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
