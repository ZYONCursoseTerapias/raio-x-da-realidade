/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          dark:   '#1E6F30',
          medium: '#6CC24A',
          light:  '#9BE198',
          cream:  '#EFBE7D',
          soft:   '#98BE98',
        },
      },
    },
  },
  plugins: [],
}
