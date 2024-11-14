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
        "specialEffects" : "url('src/assets/home/specialEffects.png')",
        "wedding-1" : "url('src/assets/home/wedding/wedding_1.png')",
        "wedding-2" : "url('src/assets/home/wedding/wedding_2.png')",
        "wedding-3" : "url('src/assets/home/wedding/wedding_3.png')",
        "wedding-4" : "url('src/assets/home/wedding/wedding_4.png')",
        "party-1" : "url('src/assets/home/party/party_1.png')",
        "party-2" : "url('src/assets/home/party/party_2.png')",
        "party-3" : "url('src/assets/home/party/party_3.png')",
        "party-4" : "url('src/assets/home/party/party_4.png')",
      },
      backgroundColor : {
        "gradient" : "#666666"
      },
      fontFamily : {
        poppins: ['Poppins', 'sans-serif'],
        cormorant: ['Cormorant', 'serif'],
      },
      animation : {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      },
      keyframes : {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
      dropShadow : {
        "shadow" : "14.9px 14.9px 22.36px #666666"
      }
    },
  },
  plugins: [],
}

