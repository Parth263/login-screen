/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors:{
      "twtrBlue": "#1D9BF0",
      "twtrBlue-hover": "#1871CA",
      "twtr-blue-disabled": "#1E5D87",
      'stroke': "#546A7A",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      chirp: "chirp",
    },

    width : {
      "logoWidth" : "593px"
    }
      
    },
  },
  plugins: [],
}

