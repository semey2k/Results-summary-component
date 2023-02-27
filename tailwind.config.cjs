/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage:{
        'gradientStrongBlue' : 'linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)',
        'gradientBlackBlue' : 'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)',
        'gradientYellow' : 'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #FFB21E',
        'gradientGreen' : 'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #00BB8F',
        'gradientBlue' : 'linear-gradient(0deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), #1125D6',
      },
      colors:{
        'gradientRed' : 'rgba(255, 85, 85, 0.05)',
        'gradientYellow' : 'rgba(255, 178, 30, 0.05)',
        'gradientGreen' : 'rgba(0, 187, 143, 0.05)',
        'gradientBlue' : 'rgba(17, 37, 214, 0.05)',
      }
    },
  },
  plugins: [],
};
