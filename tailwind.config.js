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
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
      },
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      }
    },
  },
  plugins: [],
}

