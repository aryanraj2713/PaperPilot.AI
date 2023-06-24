/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        racing: ["RACING", "sans"],
        roboto_bold: ["ROBOTO", "bold"],
        roboto: ["ROBOROREG", "regular"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
