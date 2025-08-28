/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonpurple: "#a855f7",
        deepblack: "#0b0b0f",
      },
      boxShadow: {
        neon: "0 0 20px rgba(168,85,247,0.6), 0 0 40px rgba(168,85,247,0.3)",
      },
    },
  },
  plugins: [],
}