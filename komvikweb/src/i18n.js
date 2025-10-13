/* i18n.js */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';

i18n
  .use(HttpBackend) // Подключаем backend для загрузки переводов
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}/index.json' // Путь к файлам переводов
    },
    lng: 'de', // Изначальный язык
    fallbackLng: 'de', // Резервный язык
    interpolation: {
      escapeValue: false // Чтобы не экранировать HTML в переводах
    },
    ns: ['menu', 'skills', 'datenschutz', 'cookies', 'home', 'projecte', 'bildungsnachweise', 'zeugnisse'], // Массив пространств имен
    
    defaultNS: 'cookies', // Стандартное пространство имен
    debug: true, // Включаем вывод отладочных сообщений
  });

export default i18n;