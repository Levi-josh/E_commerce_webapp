/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        10: "40%",
        15: "27%",
        20: "30%",
        100: "550px",
        120: "95%",
        130: "80%",
        135: "75%",
        140: "70%",
        150: "600px",
        200: "650px",
        300: "850px",
        400: "1050px",
      },
      height: {
        100: "300px",
      }
    },
  },
  plugins: [],
}

