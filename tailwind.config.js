/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#019d91', dark: '#018a7f' },
        ink: '#09090b',
        charcoal: '#18181b',
        slate700: '#27272a',
        steel: '#71717b',
        fog: '#9f9fa9',
        cloud: '#e4e4e7',
        mist: '#f2f2f3',
        canvas: '#f4f4f5',
        paper: '#ffffff',
        wash: '#fff8e5',
        sunshine: '#f0b100',
        'mint-wash': '#b7ffe7',
        'mint-pop': '#61f7cf',
        pink: '#ff8a80',
        navy: '#111827',
      },
      fontFamily: {
        display: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        caption: ['12px', { lineHeight: '1.33', letterSpacing: '-0.01em' }],
        'body-sm': ['14px', { lineHeight: '1.43', letterSpacing: '-0.01em' }],
        body: ['16px', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        'body-lg': ['20px', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        subheading: ['24px', { lineHeight: '1.12', letterSpacing: '-0.01em' }],
        'heading-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.03em' }],
        heading: ['48px', { lineHeight: '1.15', letterSpacing: '-0.04em' }],
        'heading-lg': ['64px', { lineHeight: '1.15', letterSpacing: '-0.04em' }],
        display: ['96px', { lineHeight: '1.04', letterSpacing: '-0.05em' }],
      },
      spacing: {
        18: '72px',
        20: '80px',
        40: '160px',
      },
      borderRadius: {
        button: '8px',
        card: '16px',
        feature: '24px',
        hero: '48px',
      },
      boxShadow: {
        subtle: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px',
        'subtle-2': 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px',
      },
      maxWidth: {
        page: '1200px',
      },
      transitionTimingFunction: {
        layout: 'cubic-bezier(0.4, 0, 0.2, 1)',
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'float-rot': {
          '0%, 100%': { transform: 'translateY(0) rotate(-6deg)' },
          '50%': { transform: 'translateY(-10px) rotate(6deg)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        boop: {
          '0%': { transform: 'scale(1)' },
          '30%': { transform: 'scale(1.25, 0.8)' },
          '50%': { transform: 'scale(0.85, 1.15)' },
          '70%': { transform: 'scale(1.08, 0.95)' },
          '100%': { transform: 'scale(1)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'pop-in': {
          '0%': { opacity: '0', transform: 'translateY(6px) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        blink: {
          '0%, 92%, 100%': { transform: 'scaleY(1)' },
          '95%': { transform: 'scaleY(0.1)' },
        },
        'word-in': {
          '0%': { opacity: '0', transform: 'translateY(60%) rotate(4deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0)' },
        },
        ping: {
          '75%, 100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'bar-grow': {
          '0%, 100%': { transform: 'scaleY(0.4)' },
          '50%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-rot': 'float-rot 5s ease-in-out infinite',
        wiggle: 'wiggle 0.4s ease-in-out',
        boop: 'boop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
        marquee: 'marquee 30s linear infinite',
        'pop-in': 'pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        blink: 'blink 4s ease-in-out infinite',
        'word-in': 'word-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'spin-slow': 'spin 12s linear infinite',
        ping: 'ping 1.6s cubic-bezier(0, 0, 0.2, 1) infinite',
        'bar-grow': 'bar-grow 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
