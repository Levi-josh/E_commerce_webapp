/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        10: "40%",
        13: '10%',
        14: '20%',
        15: "27%",
        12: '35%',
        16: '15%',
        20: "30%",
        22: "50%",
        23: '55%',
        25: "60%",
        100: "550px",
        105: "110px",
        106: '130px',
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
        46: "184px",
        110: '10%'
      },
      maxWidth: {
        22: "60%",

        130: "80%"
      },
      height: {
        100: "300px",
        105: '110px',
        106: '130px',
        110: '84vh',
        120: '81.5vh',
        130: '25vh',
        135: '35vh',
        140: '30vh',
        150: '20%',
        160: '5vh',
        170: '51.5vh',
        175: '70vh',
        180: '65vh',
        190: '30%',
        200: '70%'
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
      },
      transitionDuration: {
        2000: "200000ms"
      },
      minWidth: {
        20: '60%',
        25: '50%',
        30: '28%',
        40: '35%',
        80: '80%'
      },
      padding: {
        42: '174px',
        100: '50%',
        101: '-50%'
      },

    },
  },
  plugins: [],
}

