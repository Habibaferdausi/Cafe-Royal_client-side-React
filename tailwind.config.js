/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    theme: {
      fontFamily: {
        cursive: ["cursive"],
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
