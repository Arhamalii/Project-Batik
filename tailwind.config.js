/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      screens: {
        xsm: "460px",
        sm: "660px",
        lg: "991px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
