/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        144: "36rem",
        360: "90rem",
      },
      maxWidth: {
        360: "90rem",
      },
      transitionProperty: {
        width: "width",
      },
    },
  },
  plugins: [],
};
