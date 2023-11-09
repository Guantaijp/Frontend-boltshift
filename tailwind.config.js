/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', './src/**/*.{js,ts,jsx,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {

    extend: {
      fontFamily: {
        inter: ['Inter' , 'sans-serif'],
      },
      screens: {
        '2xs': [{ max: '319px' }, '2xs'],
        'xs': [{ min: '320px', max: '480px' }, 'xs'], // 'xs' screens have a width range from 320px to 374px
        'sm': [{ min: '481px', max: '768px' }, 'sm'],
        'md': [{ min: '769px', max: '1024px' }, 'md'], // 'md' screens have a width range from 640px to 767px
        'lg': [{ min: '1025px', max: '1200px' }, 'lg'], // 'lg' screens have a width range from 768px to 1023px
        'xl': [{ min: '1201px', max: '1279px' }, 'xl'], // 'xl' screens have a width range from 1024px to 1279px
        '2xl': [{ min: '1280px' }, '2xl'] // '2xl' screens have a minimum width of 1280px
      },
    },
  },
  plugins: [],
};