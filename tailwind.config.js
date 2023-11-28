/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1565D8',
        dark: {
          light: '#5A7184',
          hard: '#0D2436',
          soft: '#183B56',
        },
        'amber': '#FF772A',
        'grenn': '#00FFE0',
        'green': '#B95BE5',
        'tail': '#A0D7FF'
      },
      backgroundColor: {
        taily: "rgba(255, 255, 255, 0.90)"
      },
      fontFamily: {
        opensans: ["'Open Sans'", 'sans-serif'],
        roboto: ["'Roboto'", 'sans-serif'],
        kanit: ["Kanit", 'san-serif'],
      },
    },
  },
  plugins: [],
}
