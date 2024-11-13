export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors:{
        brand:{
          teal:"#1c474c",
          "light-teal":"#55b3a4",
          "light-blue":"#9fe8df",
         },
      }
    },
  },
  plugins: [],
};
