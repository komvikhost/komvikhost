/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-menu': ['"Roboto Condensed"', 'sans-serif'],
        'alumni-menu': ['"Alumni Sans Pinstripe"', 'sans-serif'],
        'shoulders-menu': ['"Big Shoulders Display"', 'sans-serif'],
      },
      fontSize: {
        'sm-menu': ['1.125rem', { lineHeight: '1.75rem' }],
        'base-menu': ['1.25rem', { lineHeight: '1.5rem' }],
        'lg-menu': ['1.5rem', { lineHeight: '2rem' }],
        'xl-menu': ['1.75rem', { lineHeight: '2.25rem' }],
        '2xl-menu': ['2rem', { lineHeight: '2.5rem' }],
      },
      colors: {
        primary: '#1e40af',
        accent: '#f97316',
        card: '#e5e7eb',
        gray: colors.gray,
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}