/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#faf8f7",
        secondary: "#353535",
        dark: "#222222",
        background: "#faf8f7",
        text: "#333",
      },
      gridTemplateColumns: {
        // Define your custom column layout
        "custom-layout": "0.5fr 2fr 1fr 1.5fr 1.5fr",
      },
    },
  },
  plugins: [],
};
