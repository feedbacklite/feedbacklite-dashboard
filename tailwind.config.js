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
      'heading-1': ['3.5rem', '3.875rem'],
      'heading-2': ['3rem', '3.313rem'],
      'heading-3': ['2.5rem', '2.75rem'],
      'heading-4': ['2rem', '2.188rem'],
      'heading-5': ['1.5rem', '1.625rem'],
      'heading-6': ['1.25rem', '1.375rem'],
      'lg-txt': ['1.25rem', '1.75rem'],
      'md-txt': ['1.125rem', '1.563rem'],
      'nm-txt': ['1rem', '1.375rem'],
      'sm-txt': ['0.875rem', '1.25rem'],
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
