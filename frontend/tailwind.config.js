/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Open: ['open-sans','verdana'],
        Poppins: ['Poppins','verdana'],
        Mont: ['Montserrat','verdana']
      },
    },
  },
  plugins: [],
}