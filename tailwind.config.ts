import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3d9ff',
          200: '#80bfff',
          300: '#4da6ff',
          400: '#1a8cff',
          500: '#0073e6',
          600: '#0059b3',
          700: '#004080',
          800: '#00264d',
          900: '#000d1a',
        },
        secondary: {
          50: '#e6fff2',
          100: '#b3ffd9',
          200: '#80ffbf',
          300: '#4dffa6',
          400: '#1aff8c',
          500: '#00e673',
          600: '#00b359',
          700: '#008040',
          800: '#004d26',
          900: '#001a0d',
        },
      },
    },
  },
  plugins: [],
};
export default config;

