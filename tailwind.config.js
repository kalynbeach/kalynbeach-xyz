/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				'kb-green-light': 'hsl(114, 97%, 46%)', // '#1AE803
				'kb-green-dark': 'hsl(114, 99%, 32%)', // '#11A101'
				'night': {
          700: 'hsl(220, 21%, 8%)', // '#11141A'
          800: 'hsl(0, 0%, 8%)', // '#141414'
          900: 'hsl(20, 11%, 5%)' // '#0F0D0C'
        },
      },
    },
  },
  plugins: [],
}
