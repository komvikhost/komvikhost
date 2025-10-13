// src/pages/zeugnisse/Arbeitszeugnisse.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Arbeitszeugnisse() {
  const { t } = useTranslation("zeugnisse");
  const timeline = t("arbeits.timeline", { returnObjects: true });

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-blue-700">{t("arbeits.title")}</h2>
      <p className="text-gray-600 mb-6">{t("arbeits.subtitle")}</p>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-6"
          >
            {/* Контент слева */}
            <div className="bg-white shadow rounded-xl p-4 flex-1 space-y-2 order-1 md:order-1">
              <h3 className="text-xl font-semibold text-orange-500">{item.company}</h3>
              <p className="font-medium text-blue-800">
                {item.position} ({item.period})
              </p>
              <p className="text-gray-800">{item.desc}</p>
              <p className="text-gray-500 text-sm">{item.tech}</p>
              <a
                href={item.file}
                rel="noopener noreferrer"
                download
                className="inline-block mt-2 px-4 py-2 bg-gray-200 text-cyan-700 rounded hover:bg-blue-200"
              >
                Download
              </a>
            </div>

            {/* Кружок с годом справа */}
            <div className="flex-shrink-0 w-24 text-center order-2 md:order-2">
              <div className="bg-blue-200 text-blue-800 rounded-full w-16 h-16 flex items-center justify-center font-bold mx-auto">
                {item.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
