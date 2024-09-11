module.exports = {
 content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scale: {
        flip: '-1',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
