module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gs-sans': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-black': 'rgb(33, 29, 29)', // Define your custom color here
      },
      colors: {
        'custom-blue': 'rgba(67, 186, 249, 0.38)', // Using RGBA for transparency
      },
    },
  },
  plugins: [],
}


