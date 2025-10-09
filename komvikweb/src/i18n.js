import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          menu: {
            home: "Home",
            about: "About Us",
            contact: "Contact"
          },
          cookies: {
            title: "We use cookies 🍪",
            text: "We use cookies to improve your experience and analyze website traffic. For more information, read our",
            policy: "Privacy Policy",
            accept: "Accept",
            decline: "Decline",
            policyTitle: "Privacy Policy",
            policyText: "This Privacy Policy explains how we handle your data and your privacy rights.",
            close: "Close"
          }
        }
      },
      de: {
        translation: {
          menu: {
            home: "Startseite",
            about: "Über uns",
            contact: "Kontakt"
          },
          cookies: {
            title: "Wir verwenden Cookies 🍪",
            text: "Wir verwenden Cookies, um Ihre Erfahrung zu verbessern und den Website-Traffic zu analysieren. Weitere Informationen finden Sie in unserer",
            policy: "Datenschutzerklärung",
            accept: "Akzeptieren",
            decline: "Ablehnen",
            policyTitle: "Datenschutzerklärung",
            policyText: "Diese Datenschutzerklärung erklärt, wie wir Ihre Daten verarbeiten und Ihre Datenschutzrechte.",
            close: "Schließen"
          }
        }
      }
    },
    lng: "en", // Начальный язык
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;