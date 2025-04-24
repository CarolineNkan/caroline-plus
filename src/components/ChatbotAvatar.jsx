import { useState } from "react";
import bitmoji from "../assets/bitmoji.png";

const bloop = new Audio("/bloop.wav");

export default function ChatbotAvatar({ isOpen, toggleChatbot }) {
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hi, I’m Caroline! Ask me anything. 💬" },
  ]);

  const faq = {
    "What’s LyricLock?":
      "LyricLock is a Reddit-based lyric guessing game I built during the Devvit Hackathon. It uses real-time social interaction to create a musical guessing challenge!",
    "Show me your resume.":
      "You can download my resume directly from the hero section at the top of this page. 📄",
    "Tell me about ASU.":
      "I was the Events & Finance Coordinator for ASU, where I led events like Jersey Jam and managed multi-campus budgeting and vendor coordination!",
  };

  const handleQuestion = (question) => {
    setMessages((prev) => [...prev, { type: "user", text: question }]);
    bloop.play();
    setIsTyping(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: faq[question] },
      ]);
      setIsTyping(false);
      bloop.play();
    }, 1200);
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden shadow-lg transition hover:scale-110 border border-white/20 bg-black animate-subtle-bounce"
        title="Ask Caroline"
        aria-label="Open Ask Caroline chatbot"
      >
        <img
          src={bitmoji}
          alt="Ask Caroline"
          className="object-cover w-full h-full"
        />
      </button>

     
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:bottom-28 sm:right-6 w-[90%] sm:w-[320px] max-h-[420px] bg-white text-black rounded-lg shadow-2xl p-4 z-50 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-lg">Ask Caroline 💖</span>
            <button
              onClick={toggleChatbot}
              className="text-sm text-gray-500 hover:text-netflix font-bold"
            >
              ✖
            </button>
          </div>

          <div className="flex-1 overflow-y-auto space-y-2 mb-4 pr-1">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`text-sm px-3 py-2 rounded-lg max-w-[80%] ${
                  msg.type === "bot"
                    ? "bg-gray-200 text-black self-start"
                    : "bg-netflix text-white self-end"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && (
              <div className="text-sm italic px-3 py-2 bg-gray-200 text-black rounded-lg self-start">
                Caroline is typing...
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(faq).map((question, idx) => (
              <button
                key={idx}
                onClick={() => handleQuestion(question)}
                className="bg-gray-100 text-sm px-3 py-1 rounded-full hover:bg-netflix hover:text-white transition"
              >
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
