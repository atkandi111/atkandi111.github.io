/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'blue-main': '#1b4480',
        'blue-secondary': '#18a2ee'
      }
    },
  },
  plugins: [],
}

