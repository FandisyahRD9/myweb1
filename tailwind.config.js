/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        rimuru: {
          sky: "#38dbe6",
          slate: "#cbd5e1",
          deep: "#031e1f"
        }
      },
      keyframes: {
        "slime-pulse": {
          "0%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.08)", opacity: "0.9" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      },
      animation: {
        "slime-pulse": "slime-pulse 1.6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};