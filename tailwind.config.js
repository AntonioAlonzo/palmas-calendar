/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "avenir-black": ["Avenir-Black", "sans-serif"],
        avenir: ["Avenir", "sans-serif"],
      },
      colors: {
        "dark-blue": "#272A3A",
        "blue-gray": "#8B97AB",
        "pale-red": "#CF545D",
      },
    },
  },
  plugins: [],
};
