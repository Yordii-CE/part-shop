/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /*  colors: {
        indigo: {
          100: '#5635b2',
          200: '#7c4dff',
          300: '#9670ff',
        },
      }, */
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    // ...
  ],
}
