// src/pages/zeugnisse/Zeugnisse.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import BildungsNachweise from "./BildungsNachweise";
import Arbeitszeugnisse from "./Arbeitszeugnisse";

export default function Zeugnisse() {
  const { t } = useTranslation("zeugnisse");
  const [selected, setSelected] = useState("bildungs"); // default

  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-6 max-w-5xl text-center">
      <h1 className="text-3xl font-bold text-orange-300 mb-3">
        {t("title", "Meine Zeugnisse")}
      </h1>
      <p className="text-gray-700 mb-6">
        {t("subtitle", "Übersicht meiner Nachweise und Dokumente.")}
      </p>

      {/* Кнопки переключения */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setSelected("bildungs")}
          className={`px-5 py-2 rounded-2xl font-semibold border-2 transition transform hover:scale-105 ${
            selected === "bildungs"
              ? "bg-green-100 text-green-800 border-green-600"
              : "text-gray-600 border-gray-300"
          }`}
        >
          {t("arbeits.title2", "Bildungsnachweise")}
        </button>

        <button
          onClick={() => setSelected("arbeits")}
          className={`px-5 py-2 rounded-2xl font-semibold border-2 transition transform hover:scale-105 ${
            selected === "arbeits"
              ? "bg-blue-100 text-blue-800 border-blue-600"
              : "text-gray-600 border-gray-300"
          }`}
        >
          {t("arbeits.title", "Arbeitszeugnisse")}
        </button>
      </div>

      {/* Основной контейнер: рендерит один из двух компонентов */}
      <div className="p-6 bg-gray-200 rounded-xl min-h-[360px]">
        {selected === "bildungs" ? (
          <BildungsNachweise />
        ) : (
          <Arbeitszeugnisse />
        )}
      </div>
    </div>
  );
}