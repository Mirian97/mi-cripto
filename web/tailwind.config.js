/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {},
      colors: {
        primary: {}
      }
    },
    screens: {
      sm: '768px',
      md: '1024px',
      lg: '1440px'
    }
  },
  plugins: []
}
