/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // importante para temas
  content: ['./src/**/*.{js,ts,jsx,tsx}'], // ajuste o path conforme sua estrutura
  theme: {
    extend: {
      colors: {
        base: {
          bg: 'var(--color-bg)',
          surface: 'var(--color-surface)',
          text: 'var(--color-text)',
          muted: 'var(--color-muted)',
          border: 'var(--color-border)',
          primary: 'var(--color-primary)',
          accent: 'var(--color-accent)',
        },
      },
    },
  },
  plugins: [],
};
