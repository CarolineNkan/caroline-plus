import smartconeLogo from "../assets/smartcone-logo.jpeg";
import asuLogo from "../assets/asu-logo.jpeg";

const experiences = [
  {
    title: "SmartCone Technologies",
    role: "Project Coordinator",
    summary: "Redesigned training modules for SmartCone’s ZIM software — improving onboarding with new tutorials and documentation.",
    tags: ["IoT", "Training UX", "Documentation"],
    image: smartconeLogo,
    quickStats: [
      "Redesigned onboarding flow",
      "Improved adoption by 60%",
      "Created 4 new training modules",
    ],
  },
  {
    title: "ASU Finance & Events",
    role: "Executive Coordinator",
    summary: "Led events, managed budgets, and coordinated collaborations as part of the African Student Union’s leadership team.",
    tags: ["Leadership", "Finance", "Event Planning"],
    image: asuLogo,
    quickStats: [
      "150+ attendees across 2 semesters",
      "Managed $1.2K+ in budget",
      "Partnered with 3 local vendors",
    ],
  },
];

export default function RealImpact() {
  return (
    <section id="impact" className="px-4 sm:px-6 md:px-8 py-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
        🌍 Real-World Impact
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <div key={index} className="group perspective">
            <div className="relative w-full h-[320px] sm:h-[300px] transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
              {/* Front */}
              <div className="absolute inset-0 bg-darkGray p-6 rounded-lg backface-hidden">
                <div className="flex items-center gap-2 mb-2">
                  {exp.image && (
                    <img
                      src={exp.image}
                      alt={`${exp.title} logo`}
                      className="w-20 h-20 object-contain"
                    />
                  )}
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
        <p className="text-sm text-netflix font-medium mb-2">{exp.role}</p>
     <p className="text-sm text-gray-300 mb-4">{exp.summary}</p>
    <div className="flex flex-wrap gap-2">
     {exp.tags.map((tag, i) => (
                    <span
            key={i}
                      className="bg-[#292929] text-sm text-white px-3 py-1 rounded-full hover:bg-netflix transition"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 bg-netflix p-6 rounded-lg text-white rotate-y-180 backface-hidden">
                <h4 className="text-lg font-semibold mb-2">⚡ Quick Stats</h4>
                <ul className="text-sm space-y-2">
                  {exp.quickStats.map((stat, i) => (
                    <li key={i}>• {stat}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
