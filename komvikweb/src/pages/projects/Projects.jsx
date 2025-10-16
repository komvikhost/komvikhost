import { useState } from "react";
import FilterBar from "./components/FilterBar";
import ProjectCard from "./components/ProjectCard";

import DunkingClub from "./dataProjects/DunkingClub";
import MyGallery from "./dataProjects/MyGallery";
import TravelPlanner from "./dataProjects/TravelPlanner";
import NeutralVision from "./dataProjects/NeutralVision";
import FlutterJP from "./dataProjects/FlutterJP";
import ShoppingList from "./dataProjects/ShoppingList";
import DunkingClubWeb from "./dataProjects/DunkingClubWeb";
import CppProject from "./dataProjects/CppProject";
import PythonProject from "./dataProjects/PythonProject";
import PhpProject from "./dataProjects/PhpProject";
import JavaProject from "./dataProjects/JavaProject";

export default function Projects() {
  const [filter, setFilter] = useState({ search: "", type: "all" });

  const allProjects = [
    DunkingClub,
    MyGallery,
    TravelPlanner,
    NeutralVision,
    FlutterJP,
    ShoppingList,
    DunkingClubWeb,
    CppProject,
    PythonProject,
    PhpProject,
    JavaProject,
  ];

  const filteredProjects = allProjects.filter((project) => {
    const title = project.id?.toLowerCase() ?? "";
    const matchesType =
      filter.type === "all" || project.category === filter.type;
    const matchesSearch = title.includes(filter.search.toLowerCase());
    return matchesType && matchesSearch;
  });

  return (
    <section className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-12">
      <div className="max-w-[90rem] mx-auto">
        {/* Заголовок */}
        <h1 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          Meine Projekte
        </h1>

        {/* Поиск / фильтр */}
        <div className="mb-10">
          <FilterBar filter={filter} setFilter={setFilter} />
        </div>

        {/* Сетка карточек */}
        <div className="grid gap-8 justify-center grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-items-center">
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
