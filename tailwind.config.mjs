import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        jim: ['"Jim Nightshade"', ...defaultTheme.fontFamily.serif],
      },
      colors: {
        "white-main": "#f8f7f4",
        "black-main": "#1c1c1c",
        "black-nav": "#0f0f11",
        "border-color": "#d1d1d1",
      },
    },
  },
  plugins: [],
};
