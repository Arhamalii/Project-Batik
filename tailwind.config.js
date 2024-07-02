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
      backgroundImage: {
        "custom-pruple-gradient":
          "linear-gradient(to right, #bd1b4c 0%, #8a3b7e 99%)",
      },
    },
  },
  plugins: [],
};
