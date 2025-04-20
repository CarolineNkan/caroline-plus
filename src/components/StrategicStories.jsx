import { useState } from "react";
import uberLogo from "../assets/uber.png";
import searsLogo from "../assets/sears.png";
import visionaryLogo from "../assets/visionarygrid.png";

export default function StrategicStories() {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const stories = [
    {
      title: "Visionary Grid ⚙️",
      context: "Business Case Competition",
      summary:
        "How generative AI helps ensure global compliance and upskilling through mentorship, training, and skill-gap detection.",
      image: visionaryLogo,
      details: {
        challenge:
          "Visionary Grid needed to expand into US and European markets — but lacked a global recruitment and compliance strategy that matched their AI-first culture.",
        solution:
          "Our team designed a multi-pronged strategy using hackathons, tech conferences, and generative AI to recruit talent, onboard efficiently, and ensure regulatory compliance.",
        approach: [
          "🏆 Recruited talent through global hackathons + top engineering schools",
          "🤖 Used AI to automate interviews, resume screening, and employee feedback",
          "🌍 Created cross-regional onboarding systems via cloud platforms",
          "📈 Proposed metrics to track reach, quality, and ROI of campaigns",
        ],
        impact:
          "Our strategy positioned Visionary Grid to hire globally, reduce compliance risks, and scale faster using innovation-driven HR tools.",
        
      },
    },
    {
      title: "Uber 🚗",
      context: "Academic Case Study – Business Ethics Final Project",
      summary:
        "My team and I analyzed Uber's 2017 workplace scandals and the ethical steps taken to rebuild its culture. I led the diversity and inclusion analysis.",
      image: uberLogo,
      details: {
        challenge:
          "In 2017, Uber faced major ethical scrutiny after internal reports revealed a toxic workplace culture, widespread harassment, and discriminatory practices—especially toward women and minority employees.",
        solution:
          "Uber responded with sweeping reforms: they hired a Chief Diversity & Inclusion Officer, introduced unconscious bias training, improved complaint reporting, and overhauled their cultural values.",
        approach: [
          "📚 Collaborated with teammates to frame the case using stakeholder and ethical analysis models",
          "🎯 My individual focus was a deep-dive into Uber’s diversity and inclusion failures",
          "📊 Evaluated their response: unconscious bias training, public D&I dashboards, and new hiring pipelines",
          "🎓 Recommended ethical recruitment strategies targeting HBCUs and underserved communities",
          "🧾 Delivered a combined presentation + final report to summarize ethical risks and reform outcomes",
        ],
        impact:
          "Our team concluded that while Uber’s reforms showed potential, sustained leadership accountability and long-term monitoring were essential for rebuilding trust. We proposed a two-year ethics audit timeline before reintegrating full stakeholder confidence.",
        note: "📘 Full case report coming soon...",
      },
    },
    {
      title: "Sears 🧊",
      context: "Academic Case Study – Strategic IT Failure & Recovery",
      summary:
        "Our team analyzed how Sears, once a retail giant, failed to treat IT as a strategic asset — leading to one of the most notable digital collapses in retail history.",
      image: searsLogo,
      details: {
        challenge:
          "Sears once dominated the retail landscape, but failed to align its IT strategy with business needs. It treated IT as a cost center, relying on outdated systems and heavily outsourcing operations while competitors embraced digital transformation.",
        solution:
          "Our team proposed a modernization plan focusing on cloud migration, AI-powered inventory, e-commerce upgrades, and real-time analytics. The solution emphasized agility, customer experience, and treating IT as a growth driver.",
        approach: [
          "📉 I led the analysis on Sears' IT governance and infrastructure gaps",
          "📊 Uncovered major failures in digital transformation, security, and data analytics",
          "🧠 Team explored how competitors like Walmart & Amazon leveraged tech to disrupt",
          "☁️ Proposed migrating Sears' fragmented systems to cloud-based platforms",
          "📈 Recommended AI-driven inventory systems, cybersecurity investments, and omnichannel experiences",
        ],
        impact:
          "Our strategic roadmap illustrated how early investment in IT could have preserved Sears’ market position. The project reinforced the importance of aligning tech with long-term business vision.",
        
      },
    },
  ];

  return (
    <section id="stories" className="px-4 sm:px-6 md:px-8 py-10 bg-black text-white">
      <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
        🧠 Strategic Stories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div
            key={index}
            className="bg-darkGray rounded-lg p-6 transform transition duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,87,0,0.6)]"
          >
            <div className="flex items-center gap-2 mb-2">
              {story.image && (
                <img
                  src={story.image}
                  alt={`${story.title} logo`}
                  className="w-24 h-20 object-contain"
                />
              )}
              <h3 className="text-xl font-semibold">{story.title}</h3>
            </div>

            <p className="text-sm sm:text-base text-netflix mb-2">{story.context}</p>
            <p className="text-sm sm:text-base text-gray-300 mb-4">{story.summary}</p>

            {expandedIndex === index && story.details ? (
              <div className="text-sm sm:text-base text-gray-200 space-y-3 mt-4">
                <div>
                  <strong className="text-white">Challenge:</strong>
                  <p>{story.details.challenge}</p>
                </div>
                <div>
                  <strong className="text-white">Solution:</strong>
                  <p>{story.details.solution}</p>
                </div>
                <div>
                  <strong className="text-white">Approach:</strong>
                  <ul className="list-disc ml-5 space-y-1">
                    {story.details.approach.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-white">Impact:</strong>
                  <p>{story.details.impact}</p>
                </div>

                {story.title === "Visionary Grid ⚙️" && (
                  <div>
                    <strong className="text-white">Slide Deck:</strong>
                    <iframe
                      src="/teamsolutions.pdf"
                      className="w-full h-64 sm:h-72 md:h-64 mt-2 rounded border border-white/10"
                      title="Team Solutions Pitch Deck"
                    />
                  </div>
                )}

                {story.title === "Sears 🧊" && (
                  <div>
                    <strong className="text-white">Slide Deck:</strong>
                    <iframe
                      src="/searsreport.pdf"
                      className="w-full h-64 sm:h-72 md:h-64 mt-2 rounded border border-white/10"
                      title="Sears IT Failure Report"
                    />
                  </div>
                )}

                {story.details.note && (
                  <p
                    className={`text-sm text-gray-400 italic mt-3 ${
                      expandedIndex === index ? "opacity-100" : "opacity-0"
                    } transition-opacity duration-500 ease-in`}
                  >
                    {story.details.note}
                  </p>
                )}
              </div>
            ) : null}

            <button
              onClick={() => toggleExpand(index)}
              className="mt-4 bg-netflix hover:bg-[#bf0810] text-white px-4 py-2 rounded text-sm font-semibold transition duration-300 hover:shadow-[0_0_15px_rgba(255,87,0,0.6)]"
            >
              {expandedIndex === index ? "Hide Details" : "Learn More"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
