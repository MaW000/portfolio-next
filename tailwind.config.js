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
      animation: {
        fade: "fadeOut 1s ease-in-out",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.transparent"), opacity: 0 },
          "100%": { backgroundColor: theme("colors.stone.700"), opacity: 1 },
        },
      }),
      maxWidth: {
        "9xl": "104rem",
        "8xl": "88rem",
      },
      screens: {
        "3xl": "2000px",
        "40p": "1439px",
        smm: { max: "767px" },
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        lightOrange: "#F1B24A",
        darkOrange: "#ff8c00",
        "darkOrange-500": "rgba(255, 140, 0, 0.5)",
        slate: "#ccd6f6",
        darkslate: "#495670",
        lightestnavy: "#233554",
        lightnavy: "#112240",
        lightslate: "#a8b2d1",
        maroon: "#301008",
        ymaroon: "#302408",
        bmaroon: "#082830",
      },
      margin: {
        97: "28rem",
        98: "30rem",
        99: "30rem",
        100: "34rem",
        101: "38rem",
      },
    },
  },
  plugins: [],
};
