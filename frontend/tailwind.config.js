/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#7F669D",
        secondary: "#BA94D1",
        accent: "#DEBACE",
        error: "#FBFACD"
      },
    },
  },
  plugins: [],
};
