/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hlorange: "hsl(var(--color-hlorange)/<alpha-value>)",
        portalblue: "hsl(var(--color-portalblue)/<alpha-value>)",
        bg:"hsl(var(--color-bg)/<alpha-value>)",
        content:"hsl(var(--color-content)/<alpha-value>)",
        light:"hsl(var(--color-light)/<alpha-value>)",
        dark:"hsl(var(--color-dark)/<alpha-value>)",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
