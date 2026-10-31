/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#faf6fd',
          100: '#f1e8fa',
          200: '#e2d1f4',
          300: '#c9a6e8',
          400: '#a877d6',
          500: '#8a4fc2',
          600: '#6f35a3',
          700: '#582a84',
          800: '#44206a',
          900: '#321650',
        },
        lavender: {
          50: '#fbf9ff',
          100: '#f4effc',
          200: '#e9e0fa',
          300: '#d7c8f4',
          400: '#bfa9ea',
        },
        silver: {
          50: '#fafbfc',
          100: '#f3f4f7',
          200: '#e4e7ec',
          300: '#cfd4dc',
          400: '#a9b0bc',
          500: '#7d8593',
          600: '#5b6270',
          700: '#434a57',
          800: '#2b313c',
          900: '#171b23',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 32px -12px rgba(88, 42, 132, 0.18)',
        glass: '0 12px 40px -16px rgba(88, 42, 132, 0.22), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
      },
    },
  },
  plugins: [],
};
