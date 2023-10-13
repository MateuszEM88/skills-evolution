/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lovelace: ['"Lovelace"'],
        Montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        heroBg: "#F1F0ED",
        underline: "#B59409",
      },
    },
  },
  plugins: [],
};
