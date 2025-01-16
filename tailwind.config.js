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
        "hero-squiggle": "url('public/assets/bg-hero-squiggle.svg')",
        "footer-squiggle":"url('public/assets/bg-footer-squiggle.svg')",
        "hero-left": "url('public/assets/illustration-hero-left.svg')",
        "hero-right": "url('public/assets/illustration-hero-right.svg')",
        
      },
    },
  },
  plugins: [],
};
