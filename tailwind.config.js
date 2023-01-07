/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      grey:"#3A4256",
      red:"#FF0000",
      green:"#19D3AE",
      greenHover:"#04C8A4",
      blue:"#0FCFEC",
      blueHover:"#03B8D7",
      black:"#000000",
      white:"#FFFFFF",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "false",
  },
}
