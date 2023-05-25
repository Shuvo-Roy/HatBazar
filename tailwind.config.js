/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'bodyFont': ['Poppins'],
        'titleFont': ['Nunito Sans'],
      },
      colors:{
      'navcolor': '#1c2e3d',
      'brandcolor': '#e9f1f6',
      'bodycolor': '#2d4356',
    },
    },
  },
  plugins: [],
}