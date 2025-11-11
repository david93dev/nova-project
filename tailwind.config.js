/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
};
