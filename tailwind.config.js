/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Construction division — maroon + dark yellow/gold
        maroon: {
          50: '#FBF3F4',
          100: '#F5E0E3',
          200: '#EAB9C0',
          300: '#D98C97',
          400: '#C45968',
          500: '#A83547',
          600: '#8B1E2E',
          700: '#761928',
          800: '#631623',
          900: '#53121E',
          950: '#330A11',
        },
        gold: {
          50: '#FEFAEC',
          100: '#FDF2CE',
          200: '#FAE398',
          300: '#F5CC54',
          400: '#F0B628',
          500: '#E29D14',
          600: '#C2820F',
          700: '#9B6411',
          800: '#7E5016',
          900: '#6B4417',
          950: '#3F260A',
        },
        // Music division — Spotify-inspired
        spot: {
          green: '#1DB954',
          'green-bright': '#1ED760',
          'green-dark': '#169C46',
          black: '#121212',
          'gray-dark': '#181818',
          gray: '#282828',
          'gray-light': '#3E3E3E',
          'gray-lighter': '#B3B3B3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        marquee: 'marquee 30s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounceSlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        bounceSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
