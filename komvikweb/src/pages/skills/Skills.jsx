// src/pages/skills/Skills.jsx
import { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";

export default function Skills() {
  const { t } = useTranslation("skills");
  const [selectedCategory, setSelectedCategory] = useState("software");

  // Категории (только ключи и цвета)
  const categories = [
    { key: "software", color: "text-blue-600 border-blue-500" },
    { key: "web", color: "text-orange-600 border-orange-500" },
    { key: "app", color: "text-green-600 border-green-500" },
    { key: "itc", color: "text-gray-600 border-gray-500" },
    { key: "dtb", color: "text-purple-600 border-purple-500" },
    { key: "net", color: "text-rose-700 border-rose-700" },
  ];

  const skill = t(selectedCategory, { returnObjects: true });

  return (
    <div className="p-6 bg-white rounded-2xl shadow mx-auto mt-4 max-w-6xl text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-2">
        {t("title", "My Skills and Technologies")}
      </h1>
      <p className="text-gray-700 mb-6">
        {t("subtitle", "Experience with various development areas.")}
      </p>

      {/* Кнопки категорий с переводом */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`px-4 py-2 border-2 rounded-2xl font-semibold transition transform hover:scale-105 ${cat.color} ${
              selectedCategory === cat.key ? "scale-105 bg-gray-100" : ""
            }`}
          >
            {t(`${cat.key}.title`)} {/* 👈 переводим label */}
          </button>
        ))}
      </div>

      {/* Одна карточка для выбранной категории */}
      {skill && (
        <SkillCard
          title={skill.title}
          labels={skill.labels}
          data={skill.data}
          color={skill.color}
          descriptions={skill.descriptions}
        />
      )}
    </div>
  );
}
