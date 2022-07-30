// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [],
  theme: {
    fontFamily: {
      body: ['Roboto Mono', 'monospace']
    },
    colors: {
      // slate: colors.slate,
      gray: {
        light: '#f1f4f8',
        medium: '#333',
        dark: '#1f2022'
      },
      white: 'white',
      black: 'black',
      hotpink: 'hotpink'
    },
    extend: {}
  },
  plugins: []
}
