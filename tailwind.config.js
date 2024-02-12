/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "1338px": "1338px",
          "360px":"360px",
          "312px":"312px",
          "177px":"177px"
      },
      borderRadius: {
        "50%": "50%",
      },
      margin:{
        "78px":"78px",
      },
      padding:{
        "34px":"34px"
      },
      
    },
  },
  plugins: [],
};
