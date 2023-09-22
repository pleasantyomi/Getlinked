/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#150E28",
        secondary: "#903AFF",
        tetiary: "#D434FE",
        footer: "#100B20",
        textColor: "#FF26B9",
        gradient1: "#903AFF",
        gradient2: "#D434FE",
        gradient3: " #FF26B9",
        gradient4: "#FE34B9",

      },
      
      backgroundImage: {
        'prize': "url('src/assets/premium_photo-1664443577580-dd2674e9d359 1.png')"
      },

      fontFamily:{
        main: "Montserrat",
        submain: "ClashDisplay",
        primaryText: "Unica One"
      }
    },
  },
  plugins: [],
}



