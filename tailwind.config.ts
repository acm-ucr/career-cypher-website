/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cypher: {
          blue: "#708CC1",
          purple: "#B97DC6",
          "blue-100": "#B1D7E4",
        },
      },
    },
  },
  plugins: [],
};
