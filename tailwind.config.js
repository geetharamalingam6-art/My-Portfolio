/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#f8fbff',
        primary: {
          DEFAULT: '#536dfe',
          hover: '#4054d4',
          light: '#eef2ff',
          glow: 'rgba(83, 109, 254, 0.25)',
        },
        accent: {
          DEFAULT: '#ff7b72',
          light: '#fff1f0',
        },
        textMain: '#263248',
        muted: '#667085',
        card: 'rgba(255, 255, 255, 0.92)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translate(0px, 0px) rotate(0deg)' },
          '50%': { transform: 'translate(35px, -30px) rotate(180deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.12)' },
          '66%': { transform: 'translate(-20px, 25px) scale(0.92)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(83, 109, 254, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 14px rgba(83, 109, 254, 0)' },
          '100%': { transform: 'scale(0.95)', boxShadow: '0 0 0 0 rgba(83, 109, 254, 0)' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        driftUp: {
          '0%': { transform: 'translateY(100vh)', opacity: '0' },
          '20%': { opacity: '0.7' },
          '80%': { opacity: '0.7' },
          '100%': { transform: 'translateY(-10vh)', opacity: '0' },
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        floatSlow: 'floatSlow 14s ease-in-out infinite',
        shimmer: 'shimmer 4s linear infinite',
        blob: 'blob 14s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s ease-out forwards',
        gradientShift: 'gradientShift 15s ease infinite',
        pulseRing: 'pulseRing 2s cubic-bezier(0.45, 0, 0.55, 1) infinite',
        spinSlow: 'spinSlow 20s linear infinite',
        driftUp: 'driftUp 12s linear infinite',
        wave: 'wave 2.5s ease-in-out infinite',
      },
      boxShadow: {
        'soft': '0 15px 35px rgba(50, 70, 100, 0.08)',
        'soft-hover': '0 20px 45px rgba(50, 70, 100, 0.16)',
        'glow-primary': '0 10px 25px rgba(83, 109, 254, 0.28)',
      },
    },
  },
  plugins: [],
}
