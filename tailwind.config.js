/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ["Cairo", "sans-serif"],
        sintony: ["Sintony", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      animation: {
        "scroll-right": "animate-scroll-right 30s linear infinite",
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
