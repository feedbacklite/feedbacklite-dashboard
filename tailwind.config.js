module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: '#092C4C',
      secondary: '#F2994A',
      info: '#2F80ED',
      success: '#27AE60',
      warning: '#E2B93B',
      error: '#EB5757',
      black: {
        900: '#000000',
        800: '#1D1D1D',
        700: '#282828',
      },
      white: '#FFFFFF',
      grey: {
        900: '#333333',
        800: '#4F4F4F',
        700: '#828282',
        600: '#BDBDBD',
        500: '#E0E0E0',
        400: '#EDF2F7',
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
