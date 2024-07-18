/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        nexa: ['Nexa', 'sans-serif'],
      },
      backgroundImage: {
        'mainBg': "url('src/assets/mainBg.jpeg')",
        'mainBg2': "url('src/assets/mainBg2.jpg')",
        'mainBg3': "url('./src/assets/mainBg3.png')"
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
      },
      animationDelay: {
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
        // Add more delays as needed
      },
    },
  },
  plugins: [
    function ({ addUtilities, e }) {
      const delays = {
        '1s': '1s',
        '2s': '2s',
        '3s': '3s',
        '4s': '4s',
        '5s': '5s',
        // Add more delays as needed
      };
      const utilities = Object.entries(delays).map(([key, value]) => ({
        [`.${e(`delay-${key}`)}`]: {
          animationDelay: value,
        },
      }));
      addUtilities(utilities, ['responsive']);
    },
  ],
}
