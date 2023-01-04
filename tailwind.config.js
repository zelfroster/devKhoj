/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main': 'linear-gradient(180deg, #040412 -51.81%, #121220 161.57%)',
        'gradientButton': 'linear-gradient(98.72deg, rgba(255, 108, 108, 0.8) 0%, rgba(140, 138, 255, 0.8) 100%);'
      },
      colors: {
        'lightPurple': '#121227',
      },
    },
  },
  plugins: [],
}
