/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        text: 'var(--text-color)',
        hover: 'var(--hover-color)',
        'module-bg': 'var(--module-bg)',
        'footer-text': 'var(--footer-text)',
        'grey-color': 'var(--grey-color)',
        'light-grey': 'var(--light-grey)',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        secondary: 'var(--font-secondary)',
      },
    },
  },
  plugins: [],
};