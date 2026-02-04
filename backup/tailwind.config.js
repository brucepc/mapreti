/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
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
