/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
        },
        bg:"hsl(var(--color-bg) / <alpha-value>)",
        content:"hsl(var(--color-content) / <alpha-value>)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
