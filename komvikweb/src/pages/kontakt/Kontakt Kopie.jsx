import { useState } from "react";
import Kontakt1 from "./Kontakt1";
import Kontakt2 from "./Kontakt2";
import Kontakt3 from "./Kontakt3";

export default function ZaytnBarNavigation() {
  const [active, setActive] = useState(1);

  const menuItems = [
    { id: 1, title: "Контакт 1", color: "bg-blue-600" },
    { id: 2, title: "Контакт 2", color: "bg-green-600" },
    { id: 3, title: "Контакт 3", color: "bg-red-600" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* --- Sidebar --- */}
      <aside className="w-64 bg-gray-50 border-r border-gray-200 p-6 flex flex-col">
        <h2 className="text-xl font-bold mb-6">Меню</h2>
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`mb-4 px-4 py-3 rounded-lg text-white font-semibold transition-all duration-200 ${
              active === item.id ? `${item.color} shadow-lg` : "bg-gray-400 hover:bg-gray-500"
            }`}
          >
            {item.title}
          </button>
        ))}
      </aside>

      {/* --- Основная область --- */}
      <main className="flex-1 p-8">
        {active === 1 && <Kontakt1 />}
        {active === 2 && <Kontakt2 />}
        {active === 3 && <Kontakt3 />}
      </main>
    </div>
  );
}
