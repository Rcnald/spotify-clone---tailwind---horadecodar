/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/index.html',
    './dist/script.js',
  ],
  theme: {
    extend: {
      spacing:{
        '125px': '125px',
      },

      colors:{
        'hoverspt':'#18D760',
        'purpled-main':'#2D4689',
        'green-main':'#1ED760',
      },

      backgroundImage:{
        'spotify-theme': "url('../src/assets/bursts.svg')",
        'spotify-theme-mobile': "url('../src/assets/bursts-mobile.svg')",
      },

      backgroundSize:{
        '175%':'175%',
        '195%':'195%',
      },

      backgroundPosition:{
        'banner': '46% 4%',
        'banner-mobile': 'top 25% center',
      },

      gridTemplateColumns: {
        'grid-xl': 'minmax(0, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
        'grid-md': 'minmax(180px, 1fr) minmax(180px, 1fr) minmax(180px, 1fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)',
      },

      screens: {
        '2md': '900px',
      },
    },
  },
  plugins: [],
}
