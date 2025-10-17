import { useTranslation } from "react-i18next";

export default function ProjectCard({ project }) {
  const { t } = useTranslation(`projects/${project.id}`);
  const title = t("title");
  const description = t("description");

  return (
    <div
      className={`flex items-center rounded-xl shadow-md border-4 ${project.categoryColor} ${project.categoryBgColor}`}
      style={{ width: "310px", height: "320px" }}
    >
      {/* Левый блок с картинкой */}
      <div className="flex-shrink-0 p-[1px]">
        <img
          src={project.image}
          alt={title}
          className="max-h-[298px] max-w-[150px] object-cover rounded-l-lg"
        />
      </div>

      {/* Правый блок с текстом */}
      <div className="flex flex-col justify-between p-3 h-full flex-grow">
        <div>
          <h2 className="text-lg font-semibold mb-2">{title}</h2>

          {/* Показываем только для проектов в разработке */}
          {project.inDevelopment && (
            <h3 className="text-red-500 flex items-center gap-1 mb-2">
              <span className="material-symbols-outlined">keyboard_external_input</span>
              In Development
            </h3>
          )}

          <p className="text-sm text-gray-600">{description}</p>
        </div>

        {/* Ссылки GitHub и Demo */}
        <div className="mt-2 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-200 text-gray-800 px-2 py-1 rounded hover:bg-gray-400 whitespace-nowrap"
            >
              GitHub
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-200 text-blue-800 px-2 py-1 rounded hover:bg-blue-400 whitespace-nowrap"
            >
              Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
