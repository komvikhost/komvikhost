import { useEffect, useState } from "react";

export default function Footer() {
  const [dateTime, setDateTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      const year = now.getFullYear();
      const time = now.toLocaleTimeString("de-DE", { hour12: false });
      setDateTime(`© ${year} Kompaniyets Viktor — Kaufbeuren ${time}`);
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <footer className="
    fixed     bottom-0     left-0 w-full
    bg-sitebg
    text-blue-700   text-sm    h-[35px] 
    flex items-center    justify-center    z-40
    ">
      {dateTime}
    </footer>
  );
} 