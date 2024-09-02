/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(139.95deg, #33A9FF 0.64%, rgba(51, 169, 255, 0.05) 9.19%, rgba(242, 197, 37, 0) 12%)',
      },
      textColor:{
        textPrimaryBlue: '#33A9FF',
      }
    },
  },
  plugins: [],
}