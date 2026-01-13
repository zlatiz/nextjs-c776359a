import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#07080A',
        foreground: '#E6EDF3',
        primary: '#0B0F12',
        secondary: '#00BFA6',
        accent: '#FF4DA6',
        surface: '#111217',
        muted: '#A3A9B1',
        bordercol: '#22252A'
      },
      borderRadius: {
        md: '12px',
        lg: '20px',
        xl: '28px'
      }
    }
  },
  plugins: []
};

export default config;
