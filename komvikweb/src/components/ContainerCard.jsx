export default function ContainerCard({ id, title, subtitle, icon, image, onClick }) {
  return (
    <div
      onClick={() => onClick(id)}
      className="relative bg-white border-4 border-orange-500 rounded-2xl flex flex-col justify-center items-center text-center cursor-pointer h-[310px] transition hover:bg-indigo-50 hover:border-2"
   >
      <div className="transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="font-display text-3xl text-gray-800 flex flex-col items-center gap-1">
          <span className="material-symbols-outlined text-orange-500 text-5xl leading-none">
            {icon}
          </span>
          {title}
        </h2>
        <p className="font-light text-gray-600 text-lg mt-2 whitespace-pre-line">
          {subtitle}
        </p>
      </div>

      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
}


