/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      headerBlue: "#7084b8",
      dark: "#282d34",
      token: "#294353",
      price: "#2ae1b8",
      button: "#1b3447",
      balance: "#42597b",
      white: "#fff",
      chart: "#9ab0e9",
      black: "rgb(97 100 98 / 58%)",
    },
  },
  plugins: [],
};
