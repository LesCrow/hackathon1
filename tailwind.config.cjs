/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        shalimar: ["shalimar", "sans serif"],
        fredoka: ["fredoka", "sans serif"],
      },
    },
  },
  plugins: [],
};
