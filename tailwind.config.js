/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#47563a",
        secondary: "#f4c430",
        tertiary: "#d5702b",
        "black-100": "#111111",
        "black-200": "#111111",
        "white-100": "#f4efe9",
        "grey-100": "#808080",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};

// #47563a
// #f4c430
// #d5702b
// #f4efe9
// #111111 