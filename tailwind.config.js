/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-stroke-black': {
          '-webkit-text-stroke': '2px black',
          'color': 'white',
        }
      }, ['responsive', 'hover'])
    },
  ],
  purge: [
    './src/**/*.{html,ts}',
  ],
}

