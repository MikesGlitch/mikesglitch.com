const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
      '2xl': '1024px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      body: ['Roboto Mono', 'monospace']
    },
    colors: {
      gray: {
        light: '#f1f4f8',
        medium: {
          default: '#333',
          2: '#2d2d31'
        },
        dark: '#1f2022'
      },
      yellow: colors.yellow[400],
      white: 'white',
      black: 'black',
      hotpink: 'hotpink'
    },
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
