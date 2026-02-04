/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#a30000",
        "background-light": "#f8f5f5",
        "background-dark": "#230f0f"
      },
      fontFamily: {
        display: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}
