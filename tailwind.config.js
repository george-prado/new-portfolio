/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '3px 5px 5px rgb(0, 0, 0, 0.15)',
        DEFAULT: '2px 2px 4px rgb(0, 0, 0, 1)',
        lg: '4px 8px 16px rgb(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

