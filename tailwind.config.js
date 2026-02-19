/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Assistant', 'sans-serif'],
      },
      colors: {
        brand: {
          lime: '#A4D65E',
          forest: '#2E5936',
          gray: '#F8F9FA',
          dark: '#1A1A1A',
        }
      },
    },
  },
  plugins: [],
}
