/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F8D57E",
        pen: "#534E4E",
        blue: "#1F98EC"
      }
    },
  },
  plugins: [],
}