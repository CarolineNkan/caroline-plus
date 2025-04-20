export default function Footer() {
  return (
    <footer
      id="footer"
      className="px-4 sm:px-6 md:px-8 py-6 bg-black text-white border-t border-gray-700"
    >
      <p className="text-center text-sm sm:text-base">
        © {new Date().getFullYear()} Caroline Nkan. Built with story, strategy, and soul. 💼✨
      </p>

      <div className="flex flex-col sm:flex-row justify-center sm:justify-center items-center gap-3 sm:gap-4 mt-3 text-sm sm:text-base">
        <a
          href="https://github.com/CarolineNkan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Caroline's GitHub profile"
          className="hover:text-netflix transition"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/carolinenkan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Caroline's LinkedIn profile"
          className="hover:text-netflix transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:Carolinenkan805@gmail.com"
          aria-label="Send Caroline an email"
          className="hover:text-netflix transition"
        >
          Email
        </a>
        <a
          href="https://devpost.com/carolinenkan805"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Caroline's Devpost profile"
          className="hover:text-netflix transition"
        >
          Devpost
        </a>
      </div>
    </footer>
  );
}
