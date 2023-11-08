import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "light-gray": "#E5E5E6",
        'body-bg': '#F4F4F5',
         
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {

        'old-standard': ['Old Standard TT', 'serif'],
        'staatliches': ['Staatliches', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        opensans: ['Open sans', 'sans-serif'],
        mono: ['DM Mono', '...defaultTheme.fontFamily.mono'],
      },

    }
  },
  darkMode: "class",
  plugins: [nextui()],
}
export default config;
