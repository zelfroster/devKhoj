const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
      },
      backgroundImage: {
        main: "linear-gradient(180deg, #040412 -51.81%, #121220 161.57%)",
        gradientButton:
          "linear-gradient(98.72deg, rgba(255, 108, 108, 0.8) 0%, rgba(140, 138, 255, 0.8) 100%);",
      },
      colors: {
        lightPurple: "#121227",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "8rem",
          "2xl": "12rem",
          "3xl": "16rem",
        },
      },
      animation: {
        slideDown: "slideDown 0.5s ease-in-out",
        shake: "shake 0.5s ease-in-out",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-10px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "1" },
        },
        shake: {
          "0%,100%": { transform: "translateX(0px)" },
          "20%,60%": { transform: "translateX(-10px)" },
          "40%,80%": { transform: "translateX(10px)" },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
