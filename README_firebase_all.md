##	Оценочная стоимость (€)
Комвик-хост (Firebase backend)	Настройка Firebase, Firestore, Cloud Functions, аутентификация, API, деплой, CI/CD	👉2 000 – 4 000 €
Комвик-веб (React + Vite)	Современный SPA, дизайн, маршрутизация, интеграция с API, адаптивность	👉3 000 – 6 000 €
Комвик-апп (React Native / Expo)	Мобильное приложение (iOS + Android), авторизация, интеграция с API, деплой в сторах	👉5 000 – 10 000 €
UI/UX-дизайн	Прототипы, дизайн-система, визуальный стиль	👉1 000 – 3 000 €
Тестирование и отладка	QA, юнит-тесты, интеграционные тесты, эмуляторы	👉500 – 1 500 €
Администрирование и документация	Настройка доменов, SSL, CI/CD, документация для разработчиков	👉500 – 1 000 €
### 💰 Итого (реалистичный диапазон): 👉 12 000 – 25 000 €

komvikhost/                      ← Корень Firebase-проекта
│
├── .firebaserc                  ← Привязка к Firebase-проекту (komvikhub)
├── firebase.json                ← Настройки деплоя (hosting, functions и т.д.)
├── firestore.rules              ← Правила безопасности Firestore
├── firestore.indexes.json       ← Индексы Firestore
│
├── functions/                   ← Серверные функции (Node.js)
│   ├── package.json
│   ├── index.js                 ← Точка входа в Cloud Functions
│   └── ...                      ← Твой код API, логика и т.п.
│
├── komvikweb/                   ← Клиентская часть (веб)
│   ├── dist/                    ← Готовая сборка для деплоя
│   ├── src/                     ← Исходники React/Vite
│   ├── package.json
│   └── vite.config.js
│
├── komvikapp/                   ← Мобильное приложение (если нужно)
│   ├── src/
│   ├── package.json
│   └── app.json
│
└── README ..all .. .md          ← Документация

