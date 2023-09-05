
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {screens:{
    xs:'375px',
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },
    extend: {
      colors:{
        darkBlue:'#0B3C46',
        lightBlue:'#249298',
        orangeRed:'#F87A28',
        cyanGreen:'#eaf8fa',
        greyBlack:'#707070'
      }
  
    },
  },
  plugins: [],
}
