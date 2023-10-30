/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      transform: {
      
      },
      colors: {
        'custom-color': '#f2f0ea',
        'custom-color2': '#010101',
        'custom-color3': '#edcf5d',
        'custom-color4': '#a4a4a4',
      },
      width: {
        800:"800px",
        700:"700px",
        600:"600px",
        500: '500px',
        400: '400px',
        300: '300px',
        200: '200px',
        250: '250px',
        180: "180px",
        100: '100px',
        60: '60px',
        50: '50px',
        40: '40px',
        30: '30px',
      },
    },
  },
  plugins: [],
}