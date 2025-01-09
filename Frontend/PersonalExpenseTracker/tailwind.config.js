/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
    extend: {
      colors:{
        lightBlue: '#B3A1FF',
        lightGreen: '#A4F5A4',
        containerBackground:'#FFFFFF',
        mainBackground: '#D3DCD3',
        titleText:'',
        subtitleText: '',
        mainDarkBackground: '',
        containerDarkBackground: '',
        titleDarkText: '',
        subtitleDarkText: '',


      }
      
    },
  },
  plugins: [],
}

