/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bellota: ['"Bellota Text"', "cursive"], // Thêm font vào Tailwind
        roboto: ["Roboto", "sans-serif"],
        great: ["Great Vibes", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: "#202124", // or DEFAULT
          },
        },  
      },
    }),
  ],
};
