import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0F172A',
        'dark-border': '#334155',
        'dark-label-bg': '#334155',
        'dark-label': '#CBD5E1',
        'dark-text-primary': '#E2E8F0',
        'dark-text-secondary': '#CBD5E1',
        'light-text-secondary': '#64748B'
      },
    }
  },
  plugins: [
    plugin(function({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          "background": "url(/static/header-bg.png) no-repeat",
          "background-size": "cover",
          "background-position": "top"
        }
      }

      addUtilities(utilities)
    }),
  ],
}
export default config
