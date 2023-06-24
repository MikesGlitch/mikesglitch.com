import tailwindTypography from '@tailwindcss/typography'

import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
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
    colors: {
      gray: {
        light: '#f1f4f8',
        medium: {
          default: '#333',
          2: '#2d2d31'
        },
        dark: '#1f2022'
      },
      yellow: '#facc15',
      white: 'white',
      black: 'black',
      hotpink: 'hotpink'
    },
    extend: {}
  },
  plugins: [tailwindTypography]
}
