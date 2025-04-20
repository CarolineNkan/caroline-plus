import { useEffect, useRef, useState } from "react";

import slide1 from "/src/assets/ME1.jpg";
import slide2 from "/src/assets/ME2.jpg";
import slide3 from "/src/assets/ME3.jpg";
import slide4 from "/src/assets/SmartCone.jpg";
import slide5 from "/src/assets/ASU.jpg";
import slide6 from "/src/assets/JerseyJam.jpg";

const images = [slide1, slide2, slide3, slide4, slide5, slide6];

export default function Hero({ toggleChatbot }) {
  const [current, setCurrent] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isMuted) {
        const audio = new Audio("/slide-transition.wav");
        audio.volume = 0.1;
        audio.play().catch(() => {});
        audioRef.current = audio;
      }
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isMuted]);

  return (
    <section
      id="hero"
      className="relative bg-black text-white py-20 px-4 sm:px-6 md:px-8 min-h-[70vh] sm:min-h-[80vh] flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover scale-[1.15] transition-opacity duration-1000 ${
              index === current ? "opacity-40" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>

      {/* Mute Button */}
      <button
        onClick={() => setIsMuted(!isMuted)}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 bg-white/10 text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:bg-white/20 transition duration-300 backdrop-blur-sm"
        title={isMuted ? "Unmute slideshow sound" : "Mute slideshow sound"}
      >
        {isMuted ? "🔇 Muted" : "🔊 Sound On"}
      </button>

      {/* Text Content */}
      <div className="relative z-10 mt-10 max-w-screen-md px-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          Hi, I’m Caroline.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
          I build tech with story, strategy, and soul. Whether it's lyric-based
          social games or AI-driven onboarding systems, my work blends
          innovation with impact. I'm not just building projects—I'm building
          products people love.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={toggleChatbot}
            className="bg-netflix hover:bg-[#bf0810] text-white px-6 py-3 rounded-full font-semibold transition duration-300 hover:shadow-[0_0_15px_rgba(255,87,0,0.6)]"
          >
            ▶ Ask Me Anything
          </button>
          <a
            href="/CarolineNkan_Resume_2025.pdf"
            download
            title="PM-ready in one click"
          >
            <button className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-full font-semibold transition duration-300 hover:shadow-[0_0_10px_rgba(255,87,0,0.4)]">
              📄 See My Resume
            </button>
          </a>
          <a href="#projects">
            <button className="border border-white text-white hover:bg-gray-700 px-6 py-3 rounded-full font-semibold transition duration-300 hover:shadow-[0_0_10px_rgba(255,87,0,0.4)]">
              🌟 Explore My Work
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}