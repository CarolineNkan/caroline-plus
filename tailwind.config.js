/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1e1e1e",
        darkGray: "#2b2b2b",
        netflix: "#e50914"
      },
    },
  },
  plugins: [],
}

