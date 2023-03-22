const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{svelte,js,ts}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral
      },
      screens: {
        'maxlg': {'max': '1023px'},
      },
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans]
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
};
