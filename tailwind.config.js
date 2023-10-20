/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
      },
      colors: {
        heroBg: "#F1F0ED",
        underline: "#B59409",
      },
    },
  },
  plugins: [],
};
