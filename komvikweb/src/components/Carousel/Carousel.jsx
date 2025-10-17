import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CarouselFace from "./CarouselFace";

const Carousel = () => {
  const { t } = useTranslation("ich");
  const faces = t("faces", { returnObjects: true });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % faces.length);
  const prev = () =>
    setActiveIndex((prev) => (prev - 1 + faces.length) % faces.length);

  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-sitebg text-white pt-10">

      {/* Контейнер 800x800 */}
      <div
         className="relative overflow-hidden w-full max-w-6xl aspect-[12/7] perspective-[1200px] px-4"
>
        {faces.map((face, i) => (
          <CarouselFace
            key={i}
            face={face}
            isActive={i === activeIndex}
            direction={
              i === activeIndex
                ? 0
                : i < activeIndex
                ? -1
                : 1
            }
          />
        ))}
      </div>

      {/* Кнопки */}
      <div className="mt-6 flex space-x-6">
        <button
          onClick={prev}
          className="px-5 py-2 bg-gray-500 hover:bg-gray-700 rounded-2xl transition"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="px-5 py-2 bg-gray-500 hover:bg-gray-700 rounded-2xl transition"
        >
          ▶
        </button>
      </div>

      {/* Индикатор */}
      <p className="mt-4 text-gray-500 text-sm">
        {activeIndex + 1} / {faces.length}
      </p>
    </div>
  );
};

export default Carousel;
