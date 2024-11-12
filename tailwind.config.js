/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        "decor" : "url('/src/assets/home/decor.png')",
        "choreo" : "url('/src/assets/home/choreography.png')",
        "specialEffects" : "url('src/assets/home/specialEffects.png')"
      },
      backgroundColor : {
        "gradient" : "#666666"
      },
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      }
    },
  },
  plugins: [],
}

