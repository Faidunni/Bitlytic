import { m } from "framer-motion";
import { Md10K } from "react-icons/md";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#faf8f7",
        dark: "#68696b",
        text: "#000",
        // Dark theme colors
        darktheme: {
          primary: "#1a1a1a",
          secondary: "#333333",
          accent: "#4a4a4a",
          text: "#e0e0e0",
          background: "#121212",
        },
      },
      gridTemplateColumns: {
        // Define your custom column layout
        "custom-layout": "0.5fr 2fr 1fr 1fr 1.5fr",
        "mobile-layout": "0.5fr 2fr 1fr",
        "medium-layout": "0.5fr 2fr 1.5fr 1fr",
      },
    },
  },
  plugins: [],
};
