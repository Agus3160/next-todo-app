/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "vintage-500": "#391e1d",
        "vintage-400": "#603c2c",
        "vintage-300": "#8c5a3f",
        "vintage-200": "#c08e52",
        "vintage-100": "#d1bf60"
      }
    },
  },
  plugins: [],
}
