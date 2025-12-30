/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        dark: '#0a0a0a',
        'darker-gray': '#1a1a1a',
        'dark-gray': '#2a2a2a',
        gray: '#666666',
        'light-gray': '#cccccc',
        'lighter-gray': '#e5e5e5',
        'off-white': '#f5f5f5',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
      }
    },
  },
  plugins: [],
}
