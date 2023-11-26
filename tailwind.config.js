/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-20': '#F8F4EB',
        'gray-50': '#FF8139',
        'gray-100': '#FF8139',
        'gray-500': '#FF8139',
        'primary-100': '#FF8139',
        'primary-300': '#FF8139',
        'primary-500': '#FF8139',
        'secondary-400': '#FF8139',
        'secondary-500': '#FF8139',
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
      md: '2060px',
    },
  },
  plugins: [],
}
