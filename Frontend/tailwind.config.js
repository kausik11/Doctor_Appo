/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./src/**/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#007bff',    // Custom primary color
        secondary: '#6c757d',  // Custom secondary color
        success: '#28a745',    // Custom success color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
      spacing: {
        '72': '18rem',    // Custom spacing
        '84': '21rem',    // Custom spacing
      },
    },
  },
  plugins: [],
}
