/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pagani-orange": "#e76037",
        "pagani-black": "#1e2024",
      },
      fontFamily: {
        rubik: "'Rubik', sans-serif"
      }
    },
  },
  plugins: [],
};
