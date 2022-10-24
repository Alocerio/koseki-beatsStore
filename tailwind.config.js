/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
      pink: "#FB92B3",
      salmon: "#FEAFA3",
      celeste: "#589CCC",
      bg: "#292929",
      secondary: "#616161",
      logo: "#EBC7E8",
      logo1: "#BFA2DB",
    },
    extend: {
      fontFamily: {
        basic: ["'Playfair Display', serif;"],
      },
      backgroundImage: {
        bg: "url('/src/assets/bg.jpg')",
      },
    },
  },
  plugins: [],
};
