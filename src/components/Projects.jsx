import ProjectCard from "./ProjectCard";
import lyriclockImg from "../assets/lyriclock.png";
import quickvoteImg from "../assets/quickvote.png";
import comingSoonImg from "../assets/comingSoon.png";

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-6 md:px-8 py-8 bg-black">
      <h2 className="text-3xl font-bold text-white mb-4 flex items-center gap-2">
         🔥 Projects
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
        <ProjectCard
          title="LyricLock 🎧"
          description="A Reddit-based social game where users guess lyrics. Built for Devvit Hackathon."
          image={lyriclockImg}
          demoLink="https://youtu.be/N6oQwbMKXGQ"
          badge="Now Streaming"
        />

        <ProjectCard
          title="QuickVote 🗳️"
          description="A micro-survey platform with live results. Designed to simplify feedback collection."
          image={quickvoteImg}
          demoLink="#"
          badge="Coming Soon"
        />

        <ProjectCard
          title="🎬 More Coming Soon"
          description="Projects in progress. Stay tuned for the next drop..."
          image={comingSoonImg}
          demoLink="#"
        />
      </div>
    </section>
  );
}
