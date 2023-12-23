/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  plugins: [require('preline/plugin')],
  theme: {
    extend: {},
  },
  darkMode: 'class',
};
