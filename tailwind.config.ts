import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor:{
        "light-gray": "#E5E5E6",
         "lightdark": "rgba(0, 0, 0, 0)",
         
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
        'outfit': ['Outfit', 'sans-serif'],
      },

    }
  },
  plugins: [],
}
export default config;
