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
        "specialEffects" : "url('/src/assets/home/specialEffects.png')",
        "about": "url('/src/assets/about/about_us.png')",
        "service" : "url('/src/assets/service/service_main.png')"
      },
      backgroundColor : {
        "gradient" : "#666666"
      },
      gridTemplateColumns : {
        "new": "50% 25% 25%",
      }
      ,
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      animation : {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
        ["counter"]: 'counter 2s alternate ease-in-out forwards',
      },
      keyframes : {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
        counter: {
          '0%': { '--num': '0' },
          '100%': { '--num': '15' },
        },
      },
      dropShadow : {
        "shadow" : "2px 2px 5px #666666"
      },
    },
  },
  plugins: [],
}

