/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Sora"', 'sans-serif'],
      },
      colors: {
        bg: '#0a0e1a',
        surface: '#111827',
        card: '#161d2e',
        border: '#1e2d45',
        accent: '#00e5a0',
        'accent-dim': '#00b87a',
        danger: '#ff4d6d',
        warn: '#f59e0b',
        muted: '#4b5a72',
        text: '#cbd5e1',
        'text-bright': '#f0f4ff',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0,229,160,0.15)',
        'glow-sm': '0 0 10px rgba(0,229,160,0.1)',
        card: '0 4px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease forwards',
        'slide-up': 'slideUp 0.4s ease forwards',
        'pop': 'pop 0.3s cubic-bezier(0.175,0.885,0.32,1.275) forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pop: { from: { transform: 'scale(0.85)', opacity: '0' }, to: { transform: 'scale(1)', opacity: '1' } },
      },
    },
  },
  plugins: [],
}

