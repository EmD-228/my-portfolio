/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#DAA442',
          dark: '#0A0A0A',
          darker: '#000000',
          background: '#141414',
          gray: '#2A2A2A',
        }
      },
      fontFamily: {
        'display': ['Bungee', 'Impact', 'Arial Black', 'sans-serif'],
        'body': ['Google Sans Flex', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],  
}

