import { motion } from "framer-motion";

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  // Логирование, чтобы отследить, когда окно открывается и закрывается
  console.log("Modal isOpen:", isOpen);

  if (!isOpen) return null; // Если модалка не открыта, не рендерим её

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Закрытие при клике на фоновую область
    >
      <motion.div
        className="bg-white text-gray-800 rounded-lg w-[90%] sm:w-[70%] max-w-3xl p-6 shadow-lg overflow-auto max-h-[80vh]"
        onClick={(e) => e.stopPropagation()} // Блокируем клик по внутреннему элементу
      >
        <h2 className="text-xl font-semibold mb-4 text-center">Datenschutzerklärung</h2>
        <div className="text-sm">
          <p className="mb-4">


            <strong>1. Allgemeine Informationen</strong><br />
            Ich nehme den Schutz Ihrer persönlichen Daten sehr ernst. In dieser Datenschutzerklärung erkläre ich, welche Daten ich erheben und wie diese verwendet werden. Ich möchte sicherstellen, dass Sie jederzeit nachvollziehen können, wie und warum Ihre Daten verarbeitet werden.
          </p>
          <p className="mb-4">
            <strong>2. Welche Daten werden erhoben?</strong><br />
            Ich erhebe keine personenbezogenen Daten, wie zum Beispiel Namen, Adressen oder Telefonnummern. Ich sammle lediglich anonymisierte Daten zur Analyse der Nutzung meiner Website durch den Einsatz von Google Analytics. Diese Daten helfen mir, die Benutzererfahrung zu verbessern und den Website-Verkehr zu analysieren.
          </p>
          <p className="mb-4">
            <strong>3. Nutzung von Google Analytics</strong><br />
            Meine Website verwendet Google Analytics, einen Webanalysedienst der Google LLC. Google Analytics setzt Cookies ein, um zu analysieren, wie Sie meine Website nutzen. Die dabei erfassten Daten sind anonymisiert und ermöglichen keine Identifizierung der Nutzer. Die gesammelten Daten umfassen Informationen über die Nutzung meiner Website, wie die Anzahl der Besuche, die durchschnittliche Verweildauer und die Seitenaufrufe. Diese Daten werden für eine Dauer von 1 Monat gespeichert.
          </p>
          <p className="mb-4">
            <strong>4. Weitergabe an Dritte</strong><br />
            Ich gebe keine personenbezogenen Daten an Dritte weiter. Alle Daten, die durch die Nutzung meiner Website erfasst werden, werden ausschließlich zu den oben genannten Zwecken verwendet.
          </p>
          <p className="mb-4">
            <strong>5. Cookies und Cookie-Einstellungen</strong><br />
            Ich verwende Cookies, um die Nutzung meiner Website zu analysieren und Ihnen eine bessere Benutzererfahrung zu bieten. Sie können die Verwendung von Cookies jederzeit über die Einstellungen Ihres Browsers ablehnen. Wenn Sie dies tun, kann es sein, dass einige Funktionen meiner Website nicht ordnungsgemäß funktionieren.
          </p>
          <p className="mb-4">
            <strong>6. Dauer der Datenspeicherung</strong><br />
            Die durch Google Analytics erfassten Daten werden für 1 Monat gespeichert. Nach Ablauf dieser Frist werden die Daten gelöscht.
          </p>
          <p className="mb-4">
            <strong>7. Sicherheit Ihrer Daten</strong><br />
            Alle übermittelten Daten werden mit SSL verschlüsselt, um die Sicherheit der Übertragung zu gewährleisten.
          </p>
          <p className="mb-4">
            <strong>8. Rechte der Nutzer</strong><br />
            Sie haben das Recht, auf Ihre Daten zuzugreifen, sie zu ändern oder zu löschen. Falls Sie der Meinung sind, dass Ihre Daten falsch verarbeitet werden, können Sie Ihre Rechte gemäß der Datenschutz-Grundverordnung (DSGVO) geltend machen.
          </p>
          <p className="mb-4">
            <strong>9. Kontakt</strong><br />
            Meine Kontaktinformationen können Sie einsehen, sobald Sie den Cookies-Zustimmungsbanner akzeptiert haben. Wenn Sie mit den Cookies einverstanden sind, können Sie auf die Kontakt-Seite zugreifen, auf der alle notwendigen Kontaktdaten zu finden sind.
          </p>
        </div>

        

        <div className="flex justify-center mt-6">
          <button
            onClick={() => {
              console.log("Close button clicked!"); // Лог для проверки
              onClose(); // Закрытие окна при нажатии на кнопку
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}