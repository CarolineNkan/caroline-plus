export default function ProjectCard({ title, description, image, demoLink, badge }) {
  return (
    <div className="min-w-[250px] sm:min-w-[300px] md:min-w-[350px] bg-darkGray rounded-lg overflow-hidden relative transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,87,0,0.6)]">
      {badge && (
        <div className="absolute top-2 left-2 bg-netflix text-white text-xs px-2 py-1 rounded">
          {badge}
        </div>
      )}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-300 mb-3">{description}</p>
        {demoLink && (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-netflix hover:bg-[#bf0810] text-white px-4 py-2 rounded text-sm font-semibold transition duration-300 hover:shadow-[0_0_15px_rgba(255,87,0,0.6)]"
          >
            ▶ Demo
          </a>
        )}
      </div>
    </div>
  );
}
