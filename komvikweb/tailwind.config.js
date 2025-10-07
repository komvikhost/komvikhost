/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Основные три шрифта для проекта
        'roboto-menu': ['"Roboto Condensed"', 'sans-serif'],  // меню
        'alumni-menu': ['"Alumni Sans Pinstripe"', 'sans-serif'], // описания
        'shoulders-menu': ['"Big Shoulders Display"', 'sans-serif'], // заголовки
      },

      fontSize: {
        // Размеры для меню (увеличенные)
        'sm-menu': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'base-menu': ['1.25rem', { lineHeight: '1.5rem' }], // 20px
        'lg-menu': ['1.5rem', { lineHeight: '2rem' }],       // 24px
        'xl-menu': ['1.75rem', { lineHeight: '2.25rem' }],   // 28px
        '2xl-menu': ['2rem', { lineHeight: '2.5rem' }],      // 32px
      },

      colors: {
        primary: '#1e40af',       // Синий
        accent: '#f97316',        // Оранжевый
        card: '#e5e7eb',          // Аналог bg-gray-200
        gray: colors.gray,        // '#e5e7eb' (эквивалент bg-gray-200)
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}