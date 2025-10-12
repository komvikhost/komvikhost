import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Settings2 } from "lucide-react"; // иконка ⚙️ (из lucide-react)
import PrivacyPolicyModal from "./PrivacyPolicyModal"; // Импортируем компонент модального окна

export default function CookieConsent({ onConsentChange }) {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // состояние для модального окна

  // Функция для блокировки/разблокировки страницы
  const togglePageAccessibility = (block) => {
    if (block) {
      document.body.style.pointerEvents = "none"; // Блокируем взаимодействие
      document.body.style.overflow = "hidden"; // Отключаем прокрутку
    } else {
      document.body.style.pointerEvents = "auto"; // Разблокируем взаимодействие
      document.body.style.overflow = "auto"; // Включаем прокрутку
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");

    if (!consent) {
      // Если нет информации о consent, показываем окно и блокируем страницу
      setTimeout(() => {
        setVisible(true);
        togglePageAccessibility(true); // Блокируем страницу
      }, 500);
      onConsentChange(false);
    } else if (consent === "declined") {
      // Если пользователь отклонил cookies, показываем окно и блокируем страницу
      setDeclined(true);
      setVisible(true);
      onConsentChange(false);
      togglePageAccessibility(true); // Блокируем страницу
    } else if (consent === "accepted") {
      // Если пользователь принял cookies, не показываем окно и не блокируем страницу
      setDeclined(false);
      setVisible(false);
      onConsentChange(true);
      togglePageAccessibility(false); // Разблокируем страницу
    }
  }, [onConsentChange]);

  const handleChoice = (accepted) => {
    if (accepted) {
      // Если пользователь принял cookies
      localStorage.setItem("cookie_consent", "accepted");
      setDeclined(false);
      setVisible(false);
      onConsentChange(true);
      togglePageAccessibility(false); // Разблокируем страницу
    } else {
      // Если пользователь отклонил cookies
      localStorage.setItem("cookie_consent", "declined");
      setDeclined(true);
      setVisible(false); // Скрываем баннер после отказа
      onConsentChange(false);
      togglePageAccessibility(false); // Разблокируем страницу после отказа
    }
  };

  const reopenBanner = () => {
    setVisible(true);
    togglePageAccessibility(true); // Блокируем страницу при повторном открытии баннера
  };

  const closePrivacyPolicyModal = () => {
    setModalOpen(false); // Закрыть модальное окно
  };

  return (
    <>
      {/* Модальное окно для настройки cookies */}
      <AnimatePresence>
        {(visible || declined) && (
          <>
            {/* Затемнение фона */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-40"
              style={{ pointerEvents: "auto" }}
              onClick={(e) => e.preventDefault()} // чтобы не кликалось
            />

            {/* Сам баннер */}
            {visible && (
              <motion.div
                key="banner"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 80 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="fixed inset-0 flex items-center justify-center z-50"
                style={{ pointerEvents: "auto" }}
              >
                <div className="modal-content w-[92%] sm:w-[85%] md:w-[70%] lg:w-[45%] max-w-md bg-white text-gray-800 text-sm rounded-2xl shadow-2xl border border-gray-200 p-5 backdrop-blur-sm dark:bg-gray-800 dark:text-gray-100">
                  <h2 className="text-lg font-semibold mb-2 text-center">
                    {t("title")}
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed text-center">
                    {t("text")}{" "}
                    <button
                      onClick={() => setModalOpen(true)} // Открыть модальное окно при клике
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      {t("policy")}
                    </button>
                    .
                  </p>

                  <div className="flex justify-center gap-3 flex-wrap modal-buttons">
                    <button
                      onClick={() => handleChoice(false)}
                      className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition dark:bg-gray-500 dark:text-gray-100 dark:hover:bg-gray-600"
                    >
                      {t("decline")}
                    </button>
                    <button
                      onClick={() => handleChoice(true)}
                      className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
                    >
                      {t("accept")}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}
      </AnimatePresence>

      {/* Кнопка ⚙️ для открытия настроек */}
      <motion.button
        onClick={reopenBanner}
        className="fixed bottom-5 right-5 z-[9998] bg-white text-gray-700 dark:bg-gray-500 dark:text-gray-100 shadow-lg border border-gray-300 rounded-full p-3 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Change cookie settings"
      >
        <Settings2 className="w-5 h-5" />
      </motion.button>

      {/* Передаем props в PrivacyPolicyModal */}
      <PrivacyPolicyModal
        modalOpen={modalOpen}
        closePrivacyPolicyModal={closePrivacyPolicyModal}
      />
    </>
  );
}
