import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function PrivacyPolicyModal({ modalOpen, closePrivacyPolicyModal }) {
  const { t } = useTranslation();

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
          <div className="modal-content bg-white text-gray-800 text-sm rounded-lg shadow-lg w-full lg:max-w-[50vw] sm:max-w-[80vw]  max-h-[80vh] p-6 overflow-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">
              {t("policyTitleData")}  {/* Заголовок политики */}
            </h2>
            
            {/* Раздел 1: Общая информация */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("generalInfoTitle")}</h3>
              <p className="text-gray-700">{t("generalInfoText")}</p>
            </div>
            
            {/* Раздел 2: Какие данные собираются */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("dataCollectedTitle")}</h3>
              <p className="text-gray-700">{t("dataCollectedText")}</p>
            </div>
            
            {/* Раздел 3: Использование Google Analytics */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("googleAnalyticsTitle")}</h3>
              <p className="text-gray-700">{t("googleAnalyticsText")}</p>
            </div>
            
            {/* Раздел 4: Передача данных третьим лицам */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("thirdPartySharingTitle")}</h3>
              <p className="text-gray-700">{t("thirdPartySharingText")}</p>
            </div>
            
            {/* Раздел 5: Cookies и настройки Cookies */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("cookiesAndSettingsTitle")}</h3>
              <p className="text-gray-700">{t("cookiesAndSettingsText")}</p>
            </div>
            
            {/* Раздел 6: Срок хранения данных */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("dataStorageDurationTitle")}</h3>
              <p className="text-gray-700">{t("dataStorageDurationText")}</p>
            </div>
            
            {/* Раздел 7: Безопасность данных */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("dataSecurityTitle")}</h3>
              <p className="text-gray-700">{t("dataSecurityText")}</p>
            </div>
            
            {/* Раздел 8: Права пользователей */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("userRightsTitle")}</h3>
              <p className="text-gray-700">{t("userRightsText")}</p>
            </div>
            
            {/* Раздел 9: Контактная информация */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg">{t("contactTitle")}</h3>
              <p className="text-gray-700">{t("contactText")}</p>
            </div>

            {/* Кнопка закрытия модального окна */}
            <div className="flex justify-center">
              <button
                onClick={closePrivacyPolicyModal}
                className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                {t("closeData")}  {/* Перевод для кнопки закрытия */}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
