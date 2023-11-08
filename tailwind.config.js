/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        100: "550px",
        120: "95%",
        150: "600px",
        200: "650px",
        300: "850px",
        400: "1050px",
      },
      height: {
        100: "300px"
      }
    },
  },
  plugins: [],
}

