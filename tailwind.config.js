/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { fontFamily: {
    sans: [
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ],
  },
    extend: {
      underline: {
        'blue': {
          textDecoration: 'underline',
          textDecorationColor: '#3182CE',
        }},
      spacing:{"101":"500px",
      "102":"75vw",
      "103":"65vw",
      "w30":"30%",
      "w70":"70%",


      "w3":"55%",
      "w1":"45%",
      "x100":"100px",
      "y60":"60px",
    
    
    },
    }
    ,
  },
  variants: {
    extend: {
      underline: ['hover', 'active'],
    },
  },
  plugins: [
   
   ],
}

