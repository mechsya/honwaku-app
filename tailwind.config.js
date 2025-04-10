/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        robotoMedium: "RobotoMedium",
        serif: "PTSerif",
      },
      colors: {
        black: "#2C2C2C",
        primary: "#fb923c",
        base: "#18181b",
      },
    },
  },
  plugins: [],
};
