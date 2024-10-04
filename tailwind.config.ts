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
        primary: '#1a202c', // color negro para texto principal
        secondary: '#4a5568', // gris oscuro
        accent: '#3182ce', // azul para resaltar
        danger: '#e53e3e', // rojo para advertencias o errores
      },
    },
  },
  plugins: [],
};
export default config;
