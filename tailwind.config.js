/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#3EE9E5",
        navy: "#093F68",
        slate: "#777F98",
        white: "#FFFFFF",
        midnight: "#080C20",
        red: "#FF2965",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "hero-squiggle": "url('./src/assets/imgs/bg-hero-squiggle.svg')",
        "footer-squiggle":"url('./src/assets/imgs/bg-footer-squiggle.svg')",
        "hero-left": "url('./src/assets/imgs/illustration-hero-left.svg')",
        "hero-right": "url('./src/assets/imgs/illustration-hero-right.svg')",
        
      },
    },
  },
  plugins: [],
};
