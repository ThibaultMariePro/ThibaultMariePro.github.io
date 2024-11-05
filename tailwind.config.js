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
        space:"hsl(var(--color-space)/<alpha-value>)",
        powcyan:"#6ceded",
        lostcyan:"#6cb9c9",
        lostblue:"#6d85a5",
        lostpurple:"#6e5181",
        powwine:"#6f1d5c",
        lostwine:"#4f1446",
        lostdeepwine:"#2e0a30",
        abyss:"#0d001a",
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}
