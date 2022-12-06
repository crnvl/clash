/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#5800FF',
        accent: '#E900FF',
        error: '#FFC600'
      }
    }
  },
  plugins: []
}
