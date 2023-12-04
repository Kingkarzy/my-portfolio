/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
        'main': '#915eff',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/herobg.png')",
        'hero-bg3': "url('/src/assets/bg3.gif')",
        'hero-bg8': "url('/src/assets/bg8.gif')",
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-5%)',  },
          '50%': { transform: 'translateY(0)', },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s linear infinite',
      },
    },
  },
  plugins: [],
};
