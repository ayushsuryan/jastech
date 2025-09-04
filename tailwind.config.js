/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0527ff",
          light: "#3d5cff",
          gradient: "linear-gradient(to right, #0527ff, #27bbed)",
        },
        secondary: {
          DEFAULT: "#03b7ed",
        },
        background: {
          light: "#f7f7f7",
          dark: "#133239",
        },
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "heading-lg": ["48px", { lineHeight: "1.2" }],
        "heading-md": ["36px", { lineHeight: "1.2" }],
      },
      spacing: {
        section: "100px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      borderRadius: {
        custom: "100px",
      },
      boxShadow: {
        custom: "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
