/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background:"#010104",// background color
        primary: "#BB00FF", 
        paragraph: "#EBE9FC",// paragraph color
        button: "#7f5af0",// button color
        "button-text": "#fffffe",// button-text color
        stroke: "#010101",// stroke color
        main: "#fffffe",// main color
        highlight: "#8000F0",// highlight color
        secondary: "#020024",// secondary light gray color
       
    },
  },
  plugins: [],
}
}
