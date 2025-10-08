#                   KomvikHost

KomvikHost — это веб-платформа, развернутая с помощью Firebase, предназначенная для размещения и интеграции приложений, данных и серверных функций в едином облачном окружении.

🚀 Основные возможности

    Frontend: сборка проекта находится в komvikweb/dist, оптимизирована для Firebase Hosting.
    Backend: использует Firebase Functions (Node.js) для выполнения серверной логики.
    Database: настроена Cloud Firestore для хранения и синхронизации данных в реальном времени.
    Single Page Application (SPA): все маршруты перенаправляются на /index.html.
    Автоматизация: поддерживает деплой через firebase deploy.

🧱 Технологический стек

    Firebase (Hosting, Firestore, Functions)
    Node.js / JavaScript
    Git + GitHub
    (опционально) CI/CD через GitHub Actions

📦 Структура проекта
komvikhost/
├── functions/           # Серверные функции Firebase
├── komvikweb/           # Веб-приложение
│   └── dist/            # Сборка фронтенда
├── firestore.rules       # Правила доступа Firestore
├── firestore.indexes.json
├── firebase.json         # Конфигурация Firebase
└── .firebaserc           # ID проекта Firebase