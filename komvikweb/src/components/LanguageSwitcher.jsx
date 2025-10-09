import { useTranslation } from "react-i18next";
import { useState } from "react";
import Flag from "react-world-flags"; // Для флагов

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Функция для переключения языка
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setOpen(false); // Закрытие меню после выбора языка
  };

  // Получаем текущий язык
  const currentLanguage = i18n.language;

  return (
    <div className="relative">
      {/* Кнопка для отображения флага языка */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-all"
        title="Select Language"
      >
        {/* Отображаем иконку в зависимости от текущего языка */}
        <Flag
          code={currentLanguage === "de" ? "DE" : "GB"} // Показываем флаг Германии для DE, Великобритании для EN
          className="w-full h-full object-cover rounded-full"
        />
      </button>

      {/* Выпадающее меню */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg p-2">
          <button
            onClick={() => handleLanguageChange("en")}
            className="block py-2 px-4 text-left w-full hover:bg-gray-100"
          >
            <Flag code="GB" className="w-6 h-6 mr-2 inline-block" /> English
          </button>
          <button
            onClick={() => handleLanguageChange("de")}
            className="block py-2 px-4 text-left w-full hover:bg-gray-100"
          >
            <Flag code="DE" className="w-6 h-6 mr-2 inline-block" /> Deutsch
          </button>
        </div>
      )}
    </div>
  );
}