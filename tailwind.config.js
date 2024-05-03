/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'MountainMeadow': 'rgb(21, 93, 24)',
        'YellowOrange': '#FEAD3D',
        'Turquoise': '#37FAD1',
        'QuarterSpanish': '#f6f2e1',
        'Putty': ' #e7ca90',
        'Sidecar': '#f1e3c0',
        'GreenMist': '#d1d8b6'
      },
      backgroundImage: {
        'textured2': "url('assets/texturedbg2.jpg')",
      },
      boxShadow: {
        'ylg': '0px -10px 15px -3px rgba(0,0,0,0.3);',
      }
    },
  },
  plugins: [],
}

