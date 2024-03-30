/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "scroll-right": "animate-scroll-right 20s linear infinite",
      },
      backgroundImage: {
        matthieu: "url('/assets/Matthieu.svg')",
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
