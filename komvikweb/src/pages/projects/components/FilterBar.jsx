import { useTranslation } from "react-i18next";

export default function FilterBar({ filter, setFilter }) {
  const { t } = useTranslation("projects");
  return (
    // 🔹 Внешний контейнер для поля выбора и поля поиска
    <div
      className="
        flex                /* Включает flexbox (расположение элементов в ряд или колонку) */
        flex-col            /* По умолчанию — вертикальная колонка (на маленьких экранах) */
        sm:flex-row         /* На экранах ≥640px (sm) — располагает элементы в строку */
        justify-center      /* Центрирует содержимое горизонтально */
        items-center        /* Центрирует содержимое вертикально */
        gap-2               /* Расстояние между элементами = 0.5rem (8px) */
        sm:gap-3            /* На экранах ≥640px — расстояние = 0.75rem (12px) */
        md:gap-4            /* На экранах ≥768px — расстояние = 1rem (16px) */
      "
    >
      {/* 🔸 Выпадающий список (тип проекта) */}
      <select
        className="
          border             /* Добавляет рамку */
          border-gray-300    /* Цвет рамки — светло-серый */
          rounded-lg         /* Закругленные углы (large — 0.5rem) */
          px-4 py-2          /* Внутренние отступы: горизонтальные 1rem, вертикальные 0.5rem */
          focus:outline-none /* Убирает стандартное свечение при фокусе */
          focus:ring-2       /* Добавляет обводку при фокусе толщиной 2px */
          focus:ring-blue-500/* Цвет обводки при фокусе — синий */
        "
        value={filter.type}  // Текущее значение фильтра
        onChange={(e) => setFilter({ ...filter, type: e.target.value })} // Обновляем фильтр при выборе
        
        // Projects.jsx использует поле category, 
        // category: "web",  должно совпадать со значением value="web"> в option 
        //в каждом проекте в dataProjects/*.jsx указана правильная категория:
      >
        <option value="all">{t("all")}</option>
        <option value="web">Web Projekte</option>
        <option value="app">Mobile Apps</option>
        <option value="cpp">C++ Programme</option>
        <option value="python">Python Programme</option>
        <option value="php">PHP Programme</option>
        <option value="java">Java Programme</option>
      </select>

      {/* 🔸 Поле поиска */}
      <input
        type="text"
        placeholder={t("searchPlaceholder")}
        className="
          border             /* Рамка вокруг поля */
          border-gray-300    /* Цвет рамки */
          rounded-lg         /* Закругленные углы */
          px-4 py-2          /* Отступы внутри поля */
          w-full             /* Ширина 100% от родителя (для мобильных экранов) */
          sm:w-64            /* На экранах ≥640px — ширина фиксирована 16rem (≈256px) */
          md:w-80            /* На экранах ≥768px — ширина фиксирована 20rem (≈320px) */
          focus:outline-none /* Убирает стандартное свечение при фокусе */
          focus:ring-2       /* Добавляет кольцо при фокусе */
          focus:ring-blue-500/* Цвет кольца при фокусе — синий */
        "
        value={filter.search} // Значение поля поиска
        onChange={(e) => setFilter({ ...filter, search: e.target.value })} // Обновляем фильтр при вводе
      />
    </div>
  );
}
