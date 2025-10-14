/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html", // Указывает путь для HTML файлов, которые будут сканироваться Tailwind CSS
    "./src/**/*.{js,ts,jsx,tsx}", // Указывает пути для всех JS/TS/JSX/TSX файлов в проекте
  ],
  theme: {
    extend: {
      // Настройки шрифтов
      fontFamily: {
        'roboto-menu': ['"Roboto Condensed"', 'sans-serif'], // Шрифт для меню
        'alumni-menu': ['"Alumni Sans Pinstripe"', 'sans-serif'], // Другой шрифт для меню
        'shoulders-menu': ['"Big Shoulders Display"', 'sans-serif'], // Шрифт с большой высотой
        'roboto-contact': ['"Roboto"', 'sans-serif'], // Шрифт для страницы контактов (Roboto)
        'open-sans-contact': ['"Open Sans"', 'sans-serif'], // Альтернативный шрифт для контактов (Open Sans)
        'dosis': ['"Dosis"', 'sans-serif'],
        'poppins': ['"Poppins"', 'sans-serif'],
      },
      
       // _______________Настройки размеров шрифта для меню
      fontSize: {

        // шрифт для экранов (мобильных) в данном случае гамбургер меню
        'sm-menu': ['1rem', { lineHeight: '0.75rem' }],        
        // Стандартный размер шрифта для меню
        'base-menu': ['1rem', { lineHeight: '1rem' }],        
        // Большой размер шрифта для меню
        'xl-menu': ['1.25rem', { lineHeight: '1.125rem' }],        
       
        
        // ______________НОВЫЕ РАЗМЕРЫ ШРИФТА ДЛЯ КОНТАКТОВ**
        
        // Стандартный размер шрифта для страницы контактов, 1.125rem (18px) с line-height 1.75rem (28px)
        'sm-contact': ['1.125rem', { lineHeight: '1.75rem' }],        
        // Стандартный размер шрифта для страницы контактов, 1.25rem (20px) с line-height 1.5rem (24px)
        'base-contact': ['1.25rem', { lineHeight: '1.5rem' }],        
        // Большой размер шрифта для страницы контактов, 1.375rem (22px) с line-height 1.75rem (28px)
        'lg-contact': ['1.375rem', { lineHeight: '1.75rem' }],        
        // Очень крупный размер шрифта для страницы контактов, 1.5rem (24px) с line-height 2rem (32px)
        'xl-contact': ['1.5rem', { lineHeight: '2rem' }],        
        // Экстра крупный размер шрифта для страницы контактов, 1.75rem (28px) с line-height 2.25rem (36px)
        '2xl-contact': ['1.75rem', { lineHeight: '2.25rem' }],
      },
      
      // _____________Цветовая палитра, дополненная кастомными цветами
      colors: {
        primary: '#1e40af', // Основной цвет сайта (например, для ссылок, кнопок и заголовков)
        accent: '#f97316', // Акцентный цвет для выделения важных элементов
        card: '#e5e7eb', // Цвет фона карточек
        gray: colors.gray, // Стандартные серые оттенки из Tailwind
      },
    },
  },
  
  // Подключение плагина для типографики
  plugins: [require("@tailwindcss/typography")],
}
