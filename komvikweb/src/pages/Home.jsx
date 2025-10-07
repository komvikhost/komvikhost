import { Link } from "react-router-dom";
import ContainerCard from "../components/ContainerCard";

export default function Home() {
  const cards = [
    { to: "/ich", title: "ICH", subtitle: "Über mich\nHobby & Sport", icon: "person", image: "/images/start/ich2.jpg" },
    { to: "/skills", title: "SKILLS", subtitle: "Arbeitsprofil\nWissen", icon: "school", image: "/images/start/skills2.png" },
    { to: "/zeugnisse", title: "ZEUGNISSE", subtitle: "Mein beruflicher Werdegang", icon: "docs", image: "/images/start/zeugnisse2.png" },
    { to: "/projekte", title: "PROJEKTE", subtitle: "Software & App\nHardware", icon: "sdk", image: "/images/start/projekte2.png" },
    { to: "/blog", title: "BLOG", subtitle: "Blog & News\nFido", icon: "dictionary", image: "/images/start/blog2.png" },
    { to: "/kontakt", title: "KONTAKT", subtitle: "Kontaktinformationen\nImpressum", icon: "mail", image: "/images/start/kontakt2.png" },
  ];

  return (
    <div className="flex justify-center items-center bg-card pb-20 min-h-[calc(100vh-4rem)]">
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