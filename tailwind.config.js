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
      transitionTimingFunction: {
        "in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
    },
  },
  plugins: [],
};
