module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/templates/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/assets/hero.png')",
      },
      fontFamily: {
        delius: ['Delius', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        ghost: '#f9f8ff',
        orange: '#f48825',
        blue: '#62c4db',
        yellow: '#ffb70c',
        pink: '#f6749b',
        footer: '#fff9f9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
};
