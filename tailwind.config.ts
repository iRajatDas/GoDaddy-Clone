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
      colors: {
        brand: {
          "teal-dark": "#00838C",
          "teal-light": "#09757A",
          "teal-lighter": "#D8EFEF",
          charcoal: "#111111",
        },
      },
      fontFamily: {
        sans: ["var(--gds-font-sans)", ...defaultTheme.fontFamily.sans],
        sage: ["var(--gds-font-sage)", "times-new-roman", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
