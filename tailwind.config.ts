import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "accordion-slide-down":
          "accordionSlideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "accordion-slide-up":
          "accordionSlideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // "brand-100": "#006466",
        "brand-90": "#0b7ba8",
        "brand-95": "#053548",
        "brand-100": "#053b50",
        "brand-200": "#e8f7f6",
        "brand-300": "#d9d9d9",
        "brand-400": "#f7f7f7",
        "brand-500": "#f2f623",
        "brand-590": "#ffffe6", // yellow pastel
        "brand-595": "#FFFED3", // yellow pastel
        "brand-600": "#FFF8E3", // yellow
      },
      fontSize: {
        "2xs": ["0.65rem", "0.825rem"],
      },
      keyframes: {
        fadeInDown: {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        accordionSlideDown: {
          from: { height: "0" },
          to: { height: "var(--allygory-accordion-content-height)" },
        },
        accordionSlideUp: {
          from: { height: "var(--allygory-accordion-content-height)" },
          to: { height: "0" },
        },
      },
    },
  },
  plugins: [require("@allygory/with-tailwind")()],
};
export default config;
