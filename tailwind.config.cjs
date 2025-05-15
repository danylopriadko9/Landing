/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/images/bg.png')",
        "cat-bg": "url('/images/cat.png')",
      },

      keyframes: {
        pulseGlow: {
          "0%, 100%": {
            transform: "scale(1)",
            boxShadow: "0 0 20px 5px rgba(115, 254, 228, 0.7)",
          },
          "50%": {
            transform: "scale(1.05)",
            boxShadow: "0 0 30px 10px rgba(115, 254, 228, 1)",
          },
        },
      },
      animation: {
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
