/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#8ACB88",
        "secondary":"#ACDAAA",
        
      }
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    fontFamily: {
      fontFamily: ["Poppins , sans-serif"]
    },
    screens: {
      sm: "640px",
      md: "768px",
    }
  },
  plugins: [
    require("daisyui")
  ],
}

