/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'canvas': '#0D0E10',
        'surface': '#1E2024',
        'surface-hover': '#25272b',
        'border': 'rgba(255, 255, 255, 0.12)',
        'border-muted': '#2D3035',
        'text-primary': '#F0F0F0',
        'text-secondary': '#8C8C8C',
        'accent-green': '#47ed81',
        'accent-blue': '#55A8FF',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'headline-lg': ['16px', { lineHeight: '24px', letterSpacing: '0.05em', fontWeight: '700' }],
        'headline-md': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '700' }],
        'body-base': ['14px', { lineHeight: '22px', fontWeight: '400' }],
        'body-sm': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'label-caps': ['11px', { lineHeight: '16px', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      spacing: {
        'gutter': '16px',
        'margin-desktop': '32px',
        'margin-mobile': '16px',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}

