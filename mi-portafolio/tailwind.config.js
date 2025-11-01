/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'blob': 'blob 7s infinite',
        'float-particle': 'float-particle 15s infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
        'text-reveal': 'text-reveal 1s ease-out',
        'slide-up-fade': 'slide-up-fade 0.8s ease-out 0.3s both',
        'fade-in-up': 'fade-in-up 0.8s ease-out both',
        'slide-in-left': 'slide-in-left 0.8s ease-out both',
        'scale-in': 'scale-in 0.6s ease-out both',
        'pop-in': 'pop-in 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) both',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'shimmer-fast': 'shimmer-fast 1.5s infinite',
        'slide-bg': 'slide-bg 0.3s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
        'bounce-smooth': 'bounce-smooth 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-smooth 3s ease-in-out infinite',
        'pulse-text': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient-rotate': 'gradient-rotate 3s linear infinite',
        'spin-slow': 'spin-slow 3s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '25%': { transform: 'translate(20px, -50px) scale(1.1)' },
          '50%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '75%': { transform: 'translate(50px, 50px) scale(1.05)' },
        },
        'float-particle': {
          '0%, 100%': { 
            transform: 'translateY(0) translateX(0)',
            opacity: '0.3'
          },
          '25%': {
            transform: 'translateY(-100px) translateX(50px)',
            opacity: '0.5'
          },
          '50%': { 
            transform: 'translateY(-200px) translateX(-30px)',
            opacity: '0.8'
          },
          '75%': {
            transform: 'translateY(-300px) translateX(70px)',
            opacity: '0.4'
          },
        },
        'pulse-ring': {
          '0%': {
            'box-shadow': '0 0 0 0 rgba(168, 85, 247, 0.7)'
          },
          '50%': {
            'box-shadow': '0 0 0 20px rgba(168, 85, 247, 0)'
          },
          '100%': {
            'box-shadow': '0 0 0 0 rgba(168, 85, 247, 0)'
          },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'text-reveal': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
            filter: 'blur(10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
            filter: 'blur(0)'
          },
        },
        'slide-up-fade': {
          from: {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'slide-in-left': {
          from: {
            opacity: '0',
            transform: 'translateX(-50px)'
          },
          to: {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'scale-in': {
          from: {
            opacity: '0',
            transform: 'scale(0.8)'
          },
          to: {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        'pop-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)'
          },
          '50%': {
            transform: 'scale(1.1)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-3deg)' },
          '75%': { transform: 'rotate(3deg)' },
        },
        'shimmer-fast': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'slide-bg': {
          from: {
            transform: 'scaleX(0)',
            'transform-origin': 'left'
          },
          to: {
            transform: 'scaleX(1)',
            'transform-origin': 'left'
          },
        },
        'slide-down': {
          from: {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'bounce-smooth': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-20px)'
          },
        },
        'gradient-rotate': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animationDelay: {
        '2000': '2000ms',
        '4000': '4000ms',
        '200': '200ms',
      },
    },
  },
  plugins: [],
}