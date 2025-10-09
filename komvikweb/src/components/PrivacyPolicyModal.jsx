import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyModal({ modalOpen, closePrivacyPolicyModal }) {
  const { t } = useTranslation();  // Для получения переводов из i18next

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          key="privacy-policy-modal"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ pointerEvents: "auto" }}
        >
          <div className="modal-content bg-white text-gray-800 text-sm rounded-lg shadow-lg w-full max-w-[80vw] max-h-[80vh] p-6 overflow-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {t("cookies.policyTitle")}  {/* Здесь будет перевод для заголовка */}
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed text-center">
              {t("cookies.policyText")}  {/* Здесь будет перевод для текста политики */}
            </p>

            {/* Кнопка закрытия модального окна */}
            <div className="flex justify-center">
              <button
                onClick={closePrivacyPolicyModal}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {t("cookies.close")}  {/* Перевод для кнопки закрытия */}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}