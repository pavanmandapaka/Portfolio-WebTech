/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme with orange accent color palette
        'dark-bg': '#0f0f0f',
        'dark-bg-secondary': '#1a1a1a',
        'dark-bg-tertiary': '#2a2a2a',
        'text-light': '#ffffff',
        'text-secondary': '#b0b0b0',
        'accent-orange': '#ff8c00',
        'accent-orange-light': '#ff9500',
        'accent-orange-dark': '#e67e00',
        'accent-red': '#ff5a3d',
        'accent-pink': '#ff1493',
        'accent-gold': '#d4a574',
        'accent-green': '#22c55e',
        'accent-purple': '#a855f7',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'rotate': 'rotate 20s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
