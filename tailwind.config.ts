import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505', // Deep Onyx/Vantablack
        primary: {
          DEFAULT: '#8A9A5B', // Muted Acid Green
          dark: '#5E1914', // Dimmed Burgundy
        },
        gray: {
          100: '#f3f4f6', // Pure White/Silver for headings
          400: '#9ca3af', // Concrete Grey for paragraphs
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        heading: ['var(--font-syncopate)', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.25em',
        widest_xl: '.5em',
      }
    },
  },
  plugins: [],
}
export default config
