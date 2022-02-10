module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: { cyan: { dark: '#027577' } },
      fontFamily: {
        allura: ['"Allura"', 'cursive'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-main': "url(./images/Tiger - Macaron.jpeg)", 
        'home-landscape': "url(./images/Tiger - BG - Landscape.jpeg)", 
        'home-portrait': "url(./images/Tiger - BG - Portrait.jpeg)", 
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
};
