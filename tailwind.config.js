/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInRight: {
          '0%': {
              opacity: '0',
              transform: 'translateX(30%)'
          },
          '100%': { opacity: '1'}
        },
        fadeInBottom: {
          '0%': {
              opacity: '0',
              transform: 'translateY(60%)'
          },
          '100%': { opacity: '1'}
        },
      },
      animation: {
        fadeInRight: 'fadeInRight 0.6s',
        fadeInBottom: 'fadeInBottom 0.6s',
      }
    },
  },
  plugins: [],
}
