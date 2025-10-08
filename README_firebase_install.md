
###     ######## #### ########  ######## ########     ###     ######  ########
###     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
###     ######    ##  ########  ######   ########  #########  ######  ######
###     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
###     ##       #### ##     ## ######## ########  ##     ##  ######  ########

🧱 Общая структура проекта
komvikhost/                      ← главный проект (backend)
│
├── firebase.json                ← конфигурация Firebase (инициализация здесь)
├── .firebaserc                  ← ссылка на Firebase-проект
├── firebaseConfig.js            ← экспорт общих настроек для web и app
│
├── functions/                   ← функции (API на Node.js)
│     ├── index.js               ← пример API
│     └── package.json
│
├── komvikweb/                   ← сайт
│     ├── src/
│     ├── package.json
│     └── vite.config.js
│
└── komvikapp/                   ← мобильное приложение
      ├── App.js
      ├── package.json
      └── metro.config.js

###         1.  В папке komvikhost: -> firebase init

**пункты:**
✅ Functions (обязательно, для API и логики)
✅ Hosting (если будешь деплоить сайт)
✅ Emulators (чтобы тестировать локально — по желанию)
**Когда спросит:**
What language to use for functions? → JavaScript
Do you want to use ESLint? → как хочешь (можно "No" для простоты)
Do you want to install dependencies with npm now? → Yes
**Firebase создаст:**
komvikhost/functions/
komvikhost/firebase.json
komvikhost/.firebaserc

Опция	Назначение	Когда использовать
#### Functions	
  Создаёт папку с Cloud Functions (Node.js backend).	Когда нужен серверный код или API. 2 млн вызовов/мес, 400 000 ГБ-секунд CPU После превышения платно
#### App Hosting	
  Деплой full-stack приложений с серверным рендерингом (Next.js, Nuxt).	Если используешь SSR-фреймворки.Нет явного лимита, но использует Functions и Hosting → тарификация через них
#### Hosting	
  Хостинг статических сайтов (HTML, React, Vite и т.п.).	Для деплоя фронтенда (komvikweb). 10 ГБ хранения + 360 МБ трафика/мес После превышения платно
##### Storage	
  Настраивает Cloud Storage и правила доступа.	Для хранения файлов (фото, документы). 5 ГБ хранения + 1 ГБ скачиваний/мес После превышения платно
##### Emulators	
  Запускает локальные эмуляторы Firebase-сервисов.	Для тестирования без деплоя.  Бесплатно
#### Remote Config	
  Позволяет хранить и менять параметры приложения централизованно.	Для A/B тестов и динамических настроек.До ~2000 активных пользователей/мес 
##### Extensions	
  Добавляет готовые модули (например, авто-ресайз изображений).	Когда нужны типовые расширения. Бесплатная установка, но каждое использует платные сервисы
##### Realtime Database	
  Настраивает старую базу данных Firebase в реальном времени.	Если нужна моментальная синхронизация (чат).
##### Data Connect	
  Подключает GraphQL-интерфейс к базе данных.	Для работы с Firestore через GraphQL.
##### Firestore	
  Настраивает Firestore — основную NoSQL базу данных Firebase.	Для хранения данных web и app. 1 ГБ хранения + 50 000 чтений/мес + 20 000 записей/мес
##### Genkit	
  aСоздаёт проект для генеративного ИИ на Firebase.	Если планируешь использовать AI-агентов.
  Бесплатно в тесте, но использует Google AI API

 ◯ Data Connect: Set up a Firebase Data Connect service
 ◉ Firestore: Configure security rules and indexes files for Firestore
 ◯ Genkit: Setup a new Genkit project with Firebase
❯◉ Functions: Configure a Cloud Functions directory and its files
 ◯ App Hosting: Set up deployments for full-stack web apps (supports server-side rendering)
 ◉ Hosting: Set up deployments for static web apps
 ◯ Storage: Configure a security rules file for Cloud Storage
 ◯ Emulators: Set up local emulators for Firebase products
❯◯ Remote Config: Configure a template file for Remote Config
 ◯ Extensions: Set up an empty Extensions manifest
 ◯ Realtime Database: Configure a security rules file for Realtime Database and





###         2.  Создай общий конфиг — firebaseConfig.js    
В корне komvikhost/ (рядом с firebase.json):

file-> // komvikhost/firebaseConfig.js
__________________ start
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "твоя-apiKey",
  authDomain: "твоя-auth-domain.firebaseapp.com",
  projectId: "твоя-project-id",
  storageBucket: "твоя-storage-bucket.appspot.com",
  messagingSenderId: "твоя-sender-id",
  appId: "твоя-app-id",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
___________ end

📌 Эти ключи можно взять на https://console.firebase.google.com
→ Твой проект → Настройки ⚙️ → "Конфигурация SDK".

###     3. Используй конфиг в web и app
В komvikweb:

Создай файл src/firebase.js:

import { auth, db } from "../../firebaseConfig";
export { auth, db };


Теперь можно использовать в коде:

import { auth } from "./firebase";

В komvikapp:

Создай firebase.js в корне приложения:

import { auth, db } from "../firebaseConfig";
export { auth, db };


Так обе платформы подключаются к одному и тому же Firebase проекту.

###     4. (опционально) Создание API в Functions

Пример простого API:

// komvikhost/functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.getHello = functions.https.onRequest((req, res) => {
  res.send("Hello from KomvikHost API!");
});


Деплой API:

firebase deploy --only functions

###     5. Деплой сайта (если нужно)

Собери сайт:

cd komvikweb
npm run build
cd ..


В firebase.json укажи, где лежит сборка:

{
  "hosting": {
    "public": "komvikweb/dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"]
  }
}


Деплой:

firebase deploy --only hosting


 Success! Logged in as komvik.host@gmail.com
➜  komvikhost git:(master) ✗ firebase projects:list
✔ Preparing the list of your Firebase projects
No projects found.
➜  komvikhost git:(master) ✗ firebase projects:list
✔ Preparing the list of your Firebase projects
┌──────────────────────┬────────────┬────────────────┬──────────────────────┐
│ Project Display Name │ Project ID │ Project Number │ Resource Location ID │
├──────────────────────┼────────────┼────────────────┼──────────────────────┤
│ komvikhost           │ komvikhub  │ 391472106087   │ [Not specified]      │
└──────────────────────┴────────────┴────────────────┴──────────────────────┘


#                   ➜  komvikhost git:(master) ✗ firebase init

###     ######## #### ########  ######## ########     ###     ######  ########
###     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
###     ######    ##  ########  ######   ########  #########  ######  ######
###     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
###     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/komvik/_homepage_komvik_app/komvikhost

      Which Firebase features do you want to set up for this directory? Press Space to 
      select features, then Enter to confirm your choices. Firestore: Configure security 
      rules and indexes files for Firestore, Functions: Configure a Cloud Functions 
      directory and its files, Hosting: Set up deployments for static web apps

=== Project Setup

      First, let's associate this project directory with a Firebase project.
      You can create multiple project aliases by running firebase use --add, 
      but for now we'll just set up a default project.

✔ Please select an option: Use an existing project
✔ Select a default Firebase project for this directory: komvikhub (komvikhost)
#### i  Using project komvikhub (komvikhost)

=== Firestore Setup
i  firestore: ensuring required API firestore.googleapis.com is enabled...
⚠  firestore: missing required API firestore.googleapis.com. Enabling now...
#### ✔ Please select the location of your Firestore database: nam5

    Firestore Security Rules allow you to define how and when to allow
    requests. You can keep these rules in your project directory
    and publish them with firebase deploy.

#### ✔ What file should be used for Firestore Rules? firestore.rules

      Firestore indexes allow you to perform complex queries while
      maintaining performance that scales with the size of the result
      set. You can keep index definitions in your project directory
      and publish them with firebase deploy.

✔ What file should be used for Firestore indexes? firestore.indexes.json
✔  Wrote firestore.rules
### ✔  Wrote firestore.indexes.json

=== Functions Setup
      Let's create a new codebase for your functions.
      A directory corresponding to the codebase will be created in your project
      with sample code pre-configured.

        See https://firebase.google.com/docs/functions/organize-functions for
        more information on organizing your functions using codebases.

        Functions can be deployed with firebase deploy.

#### ✔ What language would you like to use to write Cloud Functions? JavaScript
#### ✔ Do you want to use ESLint to catch probable bugs and enforce style? No
#### ✔  Wrote functions/package.json
#### ✔  Wrote functions/index.js
#### ✔  Wrote functions/.gitignore
#### ✔ Do you want to install dependencies with npm now? Yes
    npm warn EBADENGINE Unsupported engine {
    npm warn EBADENGINE   package: undefined,
    npm warn EBADENGINE   required: { node: '22' },
    npm warn EBADENGINE   current: { node: 'v23.11.0', npm: '10.9.2' }
    npm warn EBADENGINE }
    npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
    npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
    added 488 packages, and audited 489 packages in 10s
    54 packages are looking for funding
      run `npm fund` for details
    found 0 vulnerabilities

=== Hosting Setup

    Your public directory is the folder (relative to your project directory) that
    will contain Hosting assets to be uploaded with firebase deploy. If you
    have a build process for your assets, use your build's output directory.

#### ✔ What do you want to use as your public directory? komvikweb/dist
#### ✔ Configure as a single-page app (rewrite all urls to /index.html)? Yes
#### ✔ Set up automatic builds and deploys with GitHub? No
#### ✔  Wrote komvikweb/dist/index.html

#### ✔  Wrote configuration info to firebase.json
#### ✔  Wrote project information to .firebaserc

      ✔  Firebase initialization complete!
➜  komvikhost git:(master) ✗ 
