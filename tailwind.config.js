/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#161622',
        secondary: {
          DEFAULT: '#FF9C01',
          100: '#FF9001',
          200: '#FF8E01',
        },
        black: {
          DEFAULT: '#000000',
          100: '#1E1E2D',
          200: '#232533',
        },
        gray: {
          100: '#CDCDE0',
        },
      },
      fontFamily: {
        poppins: {
          light: ['Poppins-Light', 'sans-serif'],
          'extra-light': ['Poppins-ExtraLight', 'sans-serif'],
          thin: ['Poppins-Thin', 'sans-serif'],
          regular: ['Poppins-Regular', 'sans-serif'],
          medium: ['Poppins-Medium', 'sans-serif'],
          semiBold: ['Poppins-SemiBold', 'sans-serif'],
          bold: ['Poppins-Bold', 'sans-serif'],
          'extra-bold': ['Poppins-ExtraBold', 'sans-serif'],
          black: ['Poppins-Black', 'sans-serif'],
        },
      },
    },
  },
  plugins: [],
};
