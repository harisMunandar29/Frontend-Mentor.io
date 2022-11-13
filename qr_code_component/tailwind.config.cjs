/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'outfit' : ['Outfit','sans-serif']
      },
      screens : {
        sm : '375px',
        lg : '1440px'
      },
      colors : {
        'white-csm' : 'hsl(0, 0%, 100%)',
        'light-gray': 'hsl(212, 45%, 89%)',
        'grayish-blue' : 'hsl(220, 15%, 55%)',
        'dark-blue' : 'hsl(218, 44%, 22%)'
      }
    },
  },
  plugins: [],
}