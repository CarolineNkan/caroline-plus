import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import StrategicStories from "./components/StrategicStories";
import RealImpact from "./components/RealImpact";
import Footer from "./components/Footer";
import ChatbotAvatar from "./components/ChatbotAvatar";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatbot = () => {
    setIsChatOpen((prev) => !prev);
  };

  
  return (
    <div className="bg-charcoal text-white font-sans min-h-screen">
      <Navbar />
      <Hero toggleChatbot={toggleChatbot} />
      <Projects />
      <StrategicStories />
      <RealImpact />
      <Footer />
      <ChatbotAvatar isOpen={isChatOpen} toggleChatbot={toggleChatbot} />
    </div>
  );
}
