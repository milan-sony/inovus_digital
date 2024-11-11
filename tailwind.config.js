/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custblue": "#0D92F4",
        "custred": "#F95454"
      },
      fontFamily: {
        "Open-Sans": ["Open Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}