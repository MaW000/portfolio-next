/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        "9xl": "104rem",
        "8xl": "88rem",
      },
      screens: {
        "3xl": "2000px",
        "40p": "1439px",
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        lightOrange: "#F1B24A",
        darkOrange: "#ff8c00",
        slate: "#ccd6f6",
        darkslate: "#495670",
        lightestnavy: "#233554",
        lightnavy: "#112240",
        lightslate: "#a8b2d1",
        maroon: "#301008",
      },
      margin: {
        100: "34rem",
      },
    },
  },
  plugins: [],
};
