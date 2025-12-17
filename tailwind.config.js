import prelinePlugin from "preline/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#000957",
        "main": "#000957",
        "blur": "#efefff",
        "footer": "#344cb7",
        "orangee": "#ff6500",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "2rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [prelinePlugin],
};
