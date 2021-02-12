module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#787F9E',
          100: '#656D90',
          200: '#515A82',
          300: '#3E4874',
          400: '#384168',
          500: '#323A5D',
          600: '#2B3251',
          700: '#252B46',
          800: '#1F243A',
          900: '#191D2E',
        },
        fonts: "#F2F2F2",
      },
      backgroundImage: theme => ({
        'nav-wave': "url('/images/wave.svg')",
      }),
      fontFamily: {
        body: [
          'Poppins',
          'Roboto',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
        ]
      },
      minWidth: {
        '0': '0',
         '1/4': '25%',
         '1/2': '50%',
         '3/4': '75%',
         'full': '100%',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
