import { useState } from "react";
import { useTranslation } from "react-i18next"; 
import FilterBar from "./components/FilterBar";
import ProjectCard from "./components/ProjectCard";


import DunkingClubWeb from "./dataProjects/DunkingClubWeb";
import NextCheckUp from "./dataProjects/NextCheckUp";

import DunkingClub from "./dataProjects/DunkingClub";
import MyGallery from "./dataProjects/MyGallery";
import TravelPlanner from "./dataProjects/TravelPlanner";
import NeutralVision from "./dataProjects/NeutralVision";
import FlutterJP from "./dataProjects/FlutterJP";
import ShoppingList from "./dataProjects/ShoppingList";

import CppProject from "./dataProjects/CppProject";
import PythonProject from "./dataProjects/PythonProject";
import PhpProject from "./dataProjects/PhpProject";
import JavaProject from "./dataProjects/JavaProject";

export default function Projects() {
  const { t } = useTranslation("projects");
  const [filter, setFilter] = useState({ search: "", type: "all" });

  const allProjects = [
//Web ______      
    NextCheckUp,
    DunkingClubWeb,
// Apps _____    
    TravelPlanner,
    FlutterJP,
    MyGallery,
    DunkingClub,
    ShoppingList,
//cpp, python, php, java ______    
    CppProject,
    PythonProject,
    PhpProject,
    JavaProject,
// __________________
     NeutralVision,
  ];

  const filteredProjects = allProjects.filter((project) => {
    const title = project.id?.toLowerCase() ?? "";
    const matchesType =
      filter.type === "all" || project.category === filter.type;
    const matchesSearch = title.includes(filter.search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-sitebg pt-1 pb-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[95rem] mx-auto">
        {/* Заголовок */}
        <h1 className="text-3xl font-semibold text-center text-gray-400 mb-4">
          {t("title")} 
        </h1>

        {/* Фильтр и поиск */}
        <div className="mb-8">
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>

        {/* Сетка карточек */}
        <div
          className="
            grid
            gap-8
            justify-center
            justify-items-center
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
          "
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((p) => <ProjectCard key={p.id} project={p} />)
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              Keine Projekte gefunden.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
