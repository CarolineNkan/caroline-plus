export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black text-white px-4 sm:px-6 md:px-8 py-4 flex flex-wrap gap-4 text-sm sm:text-base justify-center sm:justify-start shadow-md border-b border-white/10">
      <a
        href="#hero"
        className="hover:text-netflix font-semibold transition"
        aria-label="Go to Hero section"
      >
        Home
      </a>
      <a
        href="#projects"
        className="hover:text-netflix font-semibold transition"
        aria-label="Go to Projects section"
      >
        Projects
      </a>
      <a
        href="#stories"
        className="hover:text-netflix font-semibold transition"
        aria-label="Go to Strategic Stories section"
      >
        Strategic Stories
      </a>
      <a
        href="#impact"
        className="hover:text-netflix font-semibold transition"
        aria-label="Go to Real-World Impact section"
      >
        Real-World Impact
      </a>
      <a
        href="#footer"
        className="hover:text-netflix font-semibold transition"
        aria-label="Go to Footer"
      >
        Connect
      </a>
    </nav>
  );
}

