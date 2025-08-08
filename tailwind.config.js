/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        text: 'var(--color-text)',
        title: 'var(--color-title)',
        subtitle: 'var(--color-subtitle)',
        border: 'var(--color-border)',
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',

        success: {
          DEFAULT: 'var(--color-success-bg)',
          title: 'var(--color-success-title)',
          text: 'var(--color-success-text)',
          subtitle: 'var(--color-success-subtitle)',
        },
        warning: {
          DEFAULT: 'var(--color-warning-bg)',
          title: 'var(--color-warning-title)',
          text: 'var(--color-warning-text)',
          subtitle: 'var(--color-warning-subtitle)',
        },
        danger: {
          DEFAULT: 'var(--color-danger-bg)',
          title: 'var(--color-danger-title)',
          text: 'var(--color-danger-text)',
          subtitle: 'var(--color-danger-subtitle)',
        },
        info: {
          DEFAULT: 'var(--color-info-bg)',
          title: 'var(--color-info-title)',
          text: 'var(--color-info-text)',
          subtitle: 'var(--color-info-subtitle)',
        },
      },
    },
  },
  plugins: [],
};
