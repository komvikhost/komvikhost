// src/pages/zeugnisse/BildungsNachweise.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function BildungsNachweise() {
  const { t } = useTranslation("bildungsnachweise");
  const timeline = t("bildungs.timeline", { returnObjects: true });

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-green-700">{t("title")}</h2>
      <p className="text-gray-600 mb-6">{t("subtitle")}</p>

      <div className="space-y-6">
        {timeline.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row-reverse items-start md:items-center gap-6"
          >
            <div className="flex-shrink-0 w-24 text-center">
              <div className="bg-green-200 text-green-800 rounded-full w-16 h-16 flex items-center justify-center font-bold">
                {item.year}
              </div>
            </div>

            <div className="bg-white shadow rounded-xl p-4 flex-1 space-y-2">
              <h3 className="text-xl font-semibold text-green-800">{item.name}</h3>
              <p className="font-medium text-orange-400">{item.institution}</p>
              <p className="text-gray-600">{item.desc}</p>
              {item.file && (
                <a
                  href={item.file}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-gray-200 text-cyan-700 rounded hover:bg-green-200"
                >
                  Download
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
