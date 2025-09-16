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
        bgColor: '#F3F4F6',
        bgColor2: "#f4f4f5",
        color3: '#f26440',
        btnHover: "#c93f1d",
        blur: "#FDFDFD"
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
