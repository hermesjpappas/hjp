/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      'sans': ['Barlow', 'sans-serif'],
      'serif': ['Young Serif', 'serif']
    },
    extend: {},
  },
  plugins: [         
    require('tailwindcss'),     
    require('autoprefixer'),     
  ] 
}

