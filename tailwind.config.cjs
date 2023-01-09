/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'text': 'hsl(68.57,2.81%,51.18%)',
      'background-dark': `hsl(72,11.11%,8.82%)`,
      'background-light': 'hsl(53.68,9.64%,38.63%)',
    },
  },
  plugins: [],
}
