/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors : {
        color1: '#fef2f2',
        color2: 'rgb(249, 141, 141)',
        color3: '#f26440',
        color4: '#286f6c',
        color5: '174340',
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite"
      },
      keyframes: {
        "loop-scroll" : {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"},
        }
      },
    },
  },
  plugins: [],
}
