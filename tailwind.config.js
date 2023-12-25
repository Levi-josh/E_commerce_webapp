/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        10: "40%",
        15: "27%",
        20: "30%",
        22: "50%",
        25: "60%",
        100: "550px",
        110: "90%",
        120: "95%",
        125: "120%",
        130: "80%",
        135: "75%",
        140: "70%",
        150: "600px",
        200: "650px",
        250: "700px",
        300: "850px",
        400: "1050px",

      },
      margin: {
        46: "184px"
      },
      maxWidth: {
        22: "60%",

        130: "80%"
      },
      height: {
        100: "300px",
      },
      gap: {
        100: "10%",
        102: "15%",
        15: "58px"
      },
      borderWidth: {
        0.5: "0.5px"
      },
      translate: {
        50: "205px"
      }
    },
  },
  plugins: [],
}

