/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily: {
      'formula': ['Racing Sans One', 'cursive'],
    },
    // screens: {
    //   'lg': '1030px'
    // }
  },
  plugins: [require("daisyui")],
}
