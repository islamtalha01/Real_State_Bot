/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accents: {
          0: '#2D2D2D',
          1: '#484848',
          2: '#2f3336',
          3: '#444',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

