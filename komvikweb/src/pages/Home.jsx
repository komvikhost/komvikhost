import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";

export default function Home() {
  // Используем хук useTranslation для загрузки переводов для текущего языка
  const { t } = useTranslation('home'); // Загрузим переводы из пространства имен 'home'

  // Массив карточек с динамически подставляемыми переводами
  const cards = [
    { 
      to: "/ich", 
      title: t("ich_title"),  // Используем ключ из JSON для перевода
      subtitle: t("ich_text"), 
      icon: "person", 
      image: "/images/start/ich2.jpg" 
    },
    { 
      to: "/skills", 
      title: t("skills_title"), 
      subtitle: t("skills_text"), 
      icon: "school", 
      image: "/images/start/skills2.png" 
    },
    { 
      to: "/zeugnisse", 
      title: t("zeugnisse_title"), 
      subtitle: t("zeugnisse_text"), 
      icon: "docs", 
      image: "/images/start/zeugnisse2.png" 
    },
    { 
      to: "/projekte", 
      title: t("projekte_title"), 
      subtitle: t("projekte_text"), 
      icon: "sdk", 
      image: "/images/start/projekte2.png" 
    },
    { 
      to: "/blog", 
      title: t("blog_title"), 
      subtitle: t("blog_text"), 
      icon: "dictionary", 
      image: "/images/start/blog2.png" 
    },
    { 
      to: "/kontakt", 
      title: t("kontakt_title"), 
      subtitle: t("kontakt_text"), 
      icon: "mail", 
      image: "/images/start/kontakt2.png" 
    },
  ];

  return (
    <div className="flex justify-center items-center bg-sitebg pb-20 min-h-[calc(100vh-4rem)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl w-full px-4 mt-8">
        {cards.map(card => (
          <Link key={card.to} to={card.to}>
            <ContainerCard {...card} />
          </Link>
        ))}
      </div>
    </div>
  );
}
