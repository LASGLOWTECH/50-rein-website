
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {screens:{
    xs:'375px',
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px'
  },

  clipPath:{
   myclips:" ellipse(50px 60px at 0 10% 20%)"
  },
    extend: {
      colors:{
        darkBlue:'#0B3C46',
        lightBlue:'#249298',
      darkerBlue:'#f4f7f2',
        orangeRed:'#F87A28',
        cyanGreen:'#eaf8fa',
        greyBlack:'#181B38',
        grey:'#fafafa'
      }
  
    },
    animation:{
      'spin-slow':'spin 20s linear infinite',
    }

  },


  plugins: [require('flowbite/plugin'),
  require('tailwind-clip-path')
  
],
 
}
