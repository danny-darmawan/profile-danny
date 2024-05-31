/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      },
      screens: {
        '930px': '930px',
      },
    },
  },
  plugins: [],
}