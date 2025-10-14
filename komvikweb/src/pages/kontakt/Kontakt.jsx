import React from "react";
import { useTranslation } from "react-i18next";

export default function Kontakt() {
  const { t } = useTranslation("kontakt");

  const socialLinks = [
    { href: "https://www.facebook.com/fb.komvik", img: "facebook.png" },
    { href: "https://www.linkedin.com/in/viktor-kompaniyets-036b1a1a0/", img: "linkedin.png" },
    { href: "https://www.xing.com/profile/Viktor_Kompaniyets/cv", img: "xing.png" },
    { href: "https://t.me/komvik26", img: "telegram.png" },
    { href: "https://komvikde.slack.com", img: "slack.png" },
    { href: "viber://add?number=+4915128862961", img: "viber.png" },
    { href: "https://api.whatsapp.com/send?phone=4915128862961", img: "whatsapp.png" },
  ];

  return (
    <div className="flex flex-col items-center bg-gray-50 min-h-screen p-4">
      <div className="max-w-6xl w-full p-6 shadow-lg rounded-2xl bg-white">
        {/* Заголовки */}
        <h1 className="font-dosis text-3xl font-extrabold text-green-500 text-center mb-2">
          {t("title")}
        </h1>
        <h2 className="font-dosis text-2xl font-medium text-green-900 text-center mb-6">
          {t("subtitle")}
        </h2>

        {/* Основной контейнер: Слева текст, справа карта */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Левая колонка: Контакты + Соцсети + Datenschutz */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Контакты */}
            <div className="flex flex-col gap-4 bg-gray-100 rounded-lg p-4 shadow-sm">
             
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <img src="/images/kontakt/handy.png" alt="phone" className="w-6 h-6 mr-2" />
                  <a
                    href="tel:+4915128862961"
                    className="font-poppins text-gray-800 hover:text-green-700 text-base-contact"
                  >
                    +49 1512 8862961
                  </a>
                </div>
                <div className="flex items-center">
                  <img src="/images/kontakt/mail.jpeg" alt="email" className="w-6 h-6 mr-2" />
                  <a
                    href="mailto:stellenangebot2606@gmail.com"
                    className="font-poppins text-gray-800 hover:text-green-700 text-base-contact"
                  >
                    stellenangebot2606@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Социальные сети */}
            <div className="bg-blue-100 rounded-lg p-4 shadow-sm">
              <h3 className="font-dosis text-center font-semibold mb-3">{t("social.title")}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.img}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:scale-105 transition-transform"
                  >
                    <img
                      src={`/images/kontakt/${s.img}`}
                      alt={s.img}
                      className="w-10 h-10 rounded-md shadow-md hover:ring-2 hover:ring-green-600"
                    />
                  </a>
                ))}
              </div>
            </div>

            {/* Datenschutz */}
            <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
              <h3 className="font-dosis font-semibold mb-2">{t("privacy.title")}</h3>
              <p className="font-poppins text-sm text-gray-700 mb-3">{t("privacy.text")}</p>
              <a
  href={t("filedatenschutz")}
  download
  className="
    font-dosis
    inline-block
    px-6
    py-2
    text-base-contact
    font-semibold
    bg-green-200
    text-gray-500
    rounded-lg
    shadow-md
    border-2
    border-green-400
    transition
    duration-300
    ease-in-out
    hover:bg-green-700
    hover:border-green-700
    hover:text-white
    focus:outline-none
    focus:ring-2
    focus:ring-green-400
    focus:ring-offset-2
  "
>
  {t("privacy.download")}
</a>
              {/* CSS Validator */}
              <div className="flex justify-center mt-6">
                <img
                  src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
                  alt="CSS valid"
                  className="w-22 h-8"
                />
              </div>
            </div>
          </div>

          {/* Правая колонка: Карта */}
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2675.5725497566273!2d10.622825177036926!3d47.886602571216834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479c6b5d8c75474d%3A0x5499c6dfa446039b!2sWilhelmine-Mayer-Stra%C3%9Fe%2C%2087600%20Kaufbeuren!5e0!3m2!1sde!2sde!4v1741704562906!5m2!1sde!2sde"
              className="w-full h-full md:h-[450px] rounded-lg border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </div>
        </div>

        
      </div>
    </div>
  );
}
