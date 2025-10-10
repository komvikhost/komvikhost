import { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"; // Импортируем LanguageSwitcher
import { useTranslation } from "react-i18next"; // Импортируем useTranslation

export default function Header() {
  const [open, setOpen] = useState(false);
  
  const { t } = useTranslation('menu'); // Используем 'menu' для загрузки переводов меню

  const menuItems = [
    { name: t("home"), path: "/" },
    { name: t("ich"), path: "/ich" },
    { name: t("skills"), path: "/skills" },
    { name: t("projekte"), path: "/projekte" },
    { name: t("zeugnisse"), path: "/zeugnisse" },
    { name: t("blog"), path: "/blog" },
    { name: t("kontakt"), path: "/kontakt" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-card text-primary shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-1 py-1 flex justify-between items-center relative">

        {/* === ЛОГОТИП === */}
        <Link
          to="/"
          className="flex items-center gap-2 bg-white rounded-full px-4 py-1 shadow hover:shadow-lg transition-shadow duration-300"
        >
          <img src="/images/gif/l_k.gif" alt="k" className="h-10 w-auto" />
          <img src="/images/gif/l_o.gif" alt="o" className="h-10 w-auto" />
          <img src="/images/gif/l_mvik.gif" alt="mvik" className="h-10 w-auto" />
        </Link>

        {/* === ГАМБУРГЕР === */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
          className="md:hidden text-blue-700 focus:outline-none transition-transform duration-200 hover:scale-125"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* === НАВИГАЦИЯ === */}
        <nav
          className={`
            absolute md:static left-0 top-[70px] md:top-auto w-full md:w-auto
            bg-card md:bg-transparent text-center md:flex md:items-center
            transition-all duration-300 ease-in-out
            font-roboto-menu text-sm-menu md:text-base-menu lg:text-xl-menu tracking-wide
            ${open ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}
          `}
        >
          <ul className="flex flex-col md:flex-row md:space-x-4 lg:space-x-6 xl:space-x-8 p-4 md:p-0">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className="block py-3 md:py-2 text-primary hover:text-accent transition-colors duration-200 uppercase"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* === ПЕРЕКЛЮЧАТЕЛЬ ЯЗЫКОВ (сдвигаем левее, когда гамбургер-меню открыто) === */}
        <div className={`absolute top-2.5 right-12 md:static md:flex md:items-center md:gap-4`}>
          <LanguageSwitcher /> {/* Размещаем LanguageSwitcher */}
        </div>

      </div>
    </header>
  );
}
