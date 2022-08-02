/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent: 'transparent',
      "pink":"#4c1d95",
      "violet":"#5045B1",
      "backGray":"#C3C5D3",
      "black":"#000000",
      "white":"#F1F4F5",
      "textWhite":"#A8A8A8"
    },
    extend: {
      fontFamily: {
        'poppins':['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
