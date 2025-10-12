<!--
=====================================================
        KomvikHost README — Multilingual Version
        Languages: English 🇬🇧 | Deutsch 🇩🇪 | Русский 🇷🇺
=====================================================
-->

<h1 align="center">Komvikhost</h1>

<p align="center">
  <button onclick="setLanguage('en')">🇬🇧 English</button>
  <button onclick="setLanguage('de')">🇩🇪 Deutsch</button>
  <button onclick="setLanguage('ru')">🇷🇺 Русский</button>
</p>

<style>
  button {
    background-color: #2d2d2d;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 6px 14px;
    margin: 2px;
    cursor: pointer;
    font-weight: 600;
  }
  button:hover { background-color: #444; }
  .lang-section { display: none; }
</style>

<script>
  function setLanguage(lang) {
    document.querySelectorAll('.lang-section').forEach(el => el.style.display = 'none');
    document.getElementById(lang).style.display = 'block';
    localStorage.setItem('komvik_lang', lang);
  }
  document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('komvik_lang') || 'en';
    setLanguage(saved);
  });
</script>

---

<div id="en" class="lang-section">

**Komvikhost** is a web platform deployed with **Firebase**, designed to host and integrate applications, data, and backend functions within a single cloud environment.

### 🚀 Key Features

- **Frontend:** the build is located in `komvikweb/dist`, optimized for Firebase Hosting.  
- **Backend:** uses Firebase Functions (Node.js) for server logic.  
- **Database:** Cloud Firestore is configured for real-time data storage and synchronization.  
- **Single Page Application (SPA):** all routes redirect to `/index.html`.  
- **Automation:** supports deployment via `firebase deploy`.

### 🧱 Tech Stack

- Firebase (Hosting, Firestore, Functions)  
- Node.js / JavaScript  
- Git + GitHub  
- *(optional)* CI/CD via GitHub Actions  

### 📦 Project Structure

komvikhost/
├── functions/ # Firebase server functions
├── komvikweb/ # Web application
│ └── dist/ # Frontend build
├── firestore.rules # Firestore access rules
├── firestore.indexes.json
├── firebase.json # Firebase configuration
└── .firebaserc # Firebase project ID



</div>

---

<div id="de" class="lang-section">

**KomvikHost** ist eine mit **Firebase** bereitgestellte Webplattform, die dazu entwickelt wurde, Anwendungen, Daten und Serverfunktionen in einer einzigen Cloud-Umgebung zu hosten und zu integrieren.

### 🚀 Hauptfunktionen

- **Frontend:** Der Build befindet sich in `komvikweb/dist`, optimiert für Firebase Hosting.  
- **Backend:** Verwendet Firebase Functions (Node.js) zur Ausführung der Serverlogik.  
- **Datenbank:** Cloud Firestore ist für die Echtzeit-Datenspeicherung und -Synchronisierung konfiguriert.  
- **Single Page Application (SPA):** Alle Routen werden auf `/index.html` umgeleitet.  
- **Automatisierung:** Unterstützt Deployments über `firebase deploy`.

### 🧱 Technologiestack

- Firebase (Hosting, Firestore, Functions)  
- Node.js / JavaScript  
- Git + GitHub  
- *(optional)* CI/CD über GitHub Actions  

### 📦 Projektstruktur

komvikhost/
├── functions/ # Firebase-Serverfunktionen
├── komvikweb/ # Webanwendung
│ └── dist/ # Frontend-Build
├── firestore.rules # Firestore-Zugriffsregeln
├── firestore.indexes.json
├── firebase.json # Firebase-Konfiguration
└── .firebaserc # Firebase-Projekt-ID



</div>

---

<div id="ru" class="lang-section">

**Komvikhost** — это веб-платформа, развернутая с помощью **Firebase**, предназначенная для размещения и интеграции приложений, данных и серверных функций в едином облачном окружении.

### 🚀 Основные возможности

- **Frontend:** сборка проекта находится в `komvikweb/dist`, оптимизирована для Firebase Hosting.  
- **Backend:** использует Firebase Functions (Node.js) для выполнения серверной логики.  
- **Database:** настроена Cloud Firestore для хранения и синхронизации данных в реальном времени.  
- **Single Page Application (SPA):** все маршруты перенаправляются на `/index.html`.  
- **Автоматизация:** поддерживает деплой через `firebase deploy`.

### 🧱 Технологический стек

- Firebase (Hosting, Firestore, Functions)  
- Node.js / JavaScript  
- Git + GitHub  
- *(опционально)* CI/CD через GitHub Actions  

### 📦 Структура проекта

komvikhost/
├── functions/ # Серверные функции Firebase
├── komvikweb/ # Веб-приложение
│ └── dist/ # Сборка фронтенда
├── firestore.rules # Правила доступа Firestore
├── firestore.indexes.json
├── firebase.json # Конфигурация Firebase
└── .firebaserc # ID проекта Firebase

</div>