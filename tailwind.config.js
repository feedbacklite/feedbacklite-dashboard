module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      primary: {
        normal: '#092C4C',
        deep: '#041e35',
      },
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
    fontSize: {
      'heading-1': ['56px', '62px'],
      'heading-2': ['48px', '53px'],
      'heading-3': ['40px', '44px'],
      'heading-4': ['32px', '35px'],
      'heading-5': ['24px', '26px'],
      'heading-6': ['20px', '22px'],
      'lg-txt': ['20px', '28px'],
      'md-txt': ['18px', '25px'],
      'nm-txt': ['16px', '22px'],
      'sm-txt': ['14px', '20px'],
    },
    fontWeight: {
      'fb-bold': 700,
      'fb-regular': 400,
    },
    minWidth: {
      onboardingCard: '28rem',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
