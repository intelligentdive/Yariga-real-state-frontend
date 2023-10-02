/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      heading: "#11142D",
      main: "#475BE8",
      white: "#fcfcfc",
      text: "#808191",
      none: "transparent",
    },
  },
  plugins: [],
};
