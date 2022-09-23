const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: '"Segoe UI", SegoeUI, "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    extend: {
      colors: {
        green: colors.green,
        gray: colors.trueGray,
        sky: colors.sky,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
