/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cien-100': '#553D2C',
        'dosc-200': '#F98C3A',
        'tres-300': '#FCD9B4',
        'cuat-400': '#F3F2D0',
        'quin-500': '#FBFCE4'
      }
    },
  },
  plugins: [],
}

