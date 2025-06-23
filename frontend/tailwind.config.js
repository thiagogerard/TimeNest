// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEFAE0',
        green: '#35a160',
        darkGreen: '#08261f',
        lightGreen: '#e4f2d0',
        accent: '#60db9b',
        textLight: '#f3f8f0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
