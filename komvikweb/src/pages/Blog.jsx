import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

export default function Blog() {
  const { t } = useTranslation("blog");
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const matrix = letters.split("");
    const fontSize = 16;
    let columns, drops;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    const drawMatrix = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    const interval = setInterval(drawMatrix, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-screen bg-black overflow-hidden">
      {/* Canvas фон */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />

      {/* Текст поверх */}
      <div className="relative z-10 text-center font-mono">
        <h1 className="text-green-400 text-5xl md:text-6xl font-bold tracking-widest animate-pulse drop-shadow-[0_0_10px_#00ff00]">
          K O M V I K . D E
        </h1>
        <h2 className="text-white text-4xl md:text-5xl mt-2 font-mono">
          ( {t("title") || "BLOG"} )
        </h2>
        <p className="text-green-400 text-2xl md:text-3xl mt-2 font-mono drop-shadow-[0_0_10px_#00ff00]">
          {t("underConstruction") || "UNDER CONSTRUCTION"}
        </p>
      </div>
    </div>
  );
}
