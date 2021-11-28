module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'petit-purple': '#7F87BD',
        'petit-light-purple': '#CCD3FC',
        'petit-grey': '#544F57',
      },
      backgroundImage: {
        'arrow-up': "url('/arrow-up.svg')",
        'arrow-down': "url('/arrow-down.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
