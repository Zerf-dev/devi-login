const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'login-bg':
          "url('https://devi.sfo3.cdn.digitaloceanspaces.com/login/login-bg.jpg')"
      },
      colors: {
        neutral: {
          6: '#323131',
          5: '#424040',
          4: '#666464',
          3: '#898787',
          2: '#A7A5A5',
          1: '#CDCBCB',
          0.5: '#E9E7E7',
          0.25: '#F7F6F6',
          DEFAULT: '#323131'
        },
        chestnutRose: {
          DEFAULT: '#D1535B'
        },
        mountainMeadow: {
          DEFAULT: '#13A688'
        }
      },
      fontSize: {
        'heading-1': ['3.5rem', '4rem'],
        'heading-2': ['3rem', '3.5rem'],
        'heading-3': ['2.5rem', '2.74rem'],
        'heading-3.5': ['2.25rem', '2.5rem'],
        'heading-4': ['2rem', '2.5rem'],
        'heading-4.5': ['1.875rem', '2.5rem'],
        'heading-5': ['1.75rem', '2.25rem'],
        'body-xxl': ['1.5rem', '2.25rem'],
        'body-xl': ['1.25rem', '2rem'],
        'body-lg': ['1.125rem', '1.5rem'],
        'body-md': ['1rem', '1.5rem'],
        'body-sm': ['0.875rem', '1.25rem'],
        'body-xs': ['0.75rem', '1rem']
      },
      screens: {
        xs: '480px',
        ...defaultTheme.screens
      }
    }
  },
  plugins: []
};
