/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {},
      colors: {
        primary: '#1565D8',
        dark: {
          light: '#5A7184',
          hard: '#0D2436',
          soft: '#183B56',
        },
        amber: '#FF772A',
        grenn: '#00FFE0',
        green: '#B95BE5',
        tail: '#A0D7FF',
      },
      backgroundColor: {
        taily: 'rgba(255, 255, 255, 0.90)',
        'gray-20': '#F8F4EB',
        'gray-50': '#FFA76D',
      },
      backgroundImage: () => ({
        'gradient-yellowred': 'linear-gradient(90deg, #FF616A 0%, #FFC837 100%)',
        'mobile-home': "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        kanit: ['Kanit', 'san-serif'],
      },
    },

    dark: {
      light: '#5A7184',
      hard: '#0D2436',
      soft: '#183B56',
    },
  },
  plugins: [],
}
