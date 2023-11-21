import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "2xs": "0.825rem",
        "3xs": "0.625rem",
        "4xs": "0.5rem",
      },
      colors: {
        brand: {
          "teal-dark": "#00838C",
          "teal-light": "#09757A",
          "teal-lighter": "#D8EFEF",
          charcoal: "#111111",
          "charcoal-light": "#2B2B2B",
          gray: "#BAC0C3",
        },
      },

      fontFamily: {
        sans: ["var(--gds-font-sans)", ...defaultTheme.fontFamily.sans],
        sage: ["var(--gds-font-sage)", "times-new-roman", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
