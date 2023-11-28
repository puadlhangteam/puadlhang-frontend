/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#FFA76D',
        'gray-100': '#FFA76D',
        'gray-500': '#FFA76D',
        'primary-100': '#FFA76D',
        'primary-300': '#FFA76D',
        'primary-500': '#FFA76D',
        'secondary-400': '#FFA76D',
        'secondary-500': '#FFA76D',
      },
      backgroundImage: () => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        kanit: ['Kanit', 'sans-serif'],
      },
    },
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1020px',
    },
    primary: '#1565D8',
    dark: {
      light: '#5A7184',
      hard: '#0D2436',
      soft: '#183B56',
    },
  },
  plugins: [],
}
