/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'paleBlue': 'hsl(221, 100%, 96%)',
        'lightLavender' : ' hsl(241, 100%, 89%)',
        'darkGrayBlue' : 'hsl(224, 30%, 27%)',
        'lightRed' : 'hsl(0, 100%, 67%)',
        'orangeyYellow' : 'hsl(39, 100%, 56%)',
        'greenTeal': 'hsl(166, 100%, 37%)',
        'cobaltBlue' : 'hsl(234, 85%, 45%)',
        'lightSlateBlue': 'hsl(252, 100%, 67%)',
        'lightRoyalBlue':'hsl(241, 81%, 54%)',
        'violetBlue': 'hsla(256, 72%, 46%, 1)',
        'persianBlue':'#1c39bb',

      },
    },
  },
  plugins: [],
}