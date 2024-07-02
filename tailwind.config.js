/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "europa",
          "Avenir Next Condensed",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        regular: [
          "europa",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        yellow: "var(--yellow)",
        yellow2: "var(--yellow2",
        blue1: "var(--blue1)",
        blue2: "var(--blue2)",
        blue3: "var(--blue3)",
      },
    },
  },
  plugins: [],
};
