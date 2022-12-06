/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#181D31',
        secondary: '#263159',
        accent: '#495579',
        error: '#FFFBEB'
      }
    }
  },
  plugins: []
}
