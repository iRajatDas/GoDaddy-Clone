import localFont from "next/font/local";

const GDSherpa = localFont({
  src: [
    {
      path: "../public/fonts/GDSherpa-Regular.woff2",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--gds-font-sans",
});

const GDSage = localFont({
  src: [
    {
      path: "../public/fonts/GDSage-Bold.woff2",
    },
  ],
  display: "swap",
  preload: true,
  variable: "--gds-font-sage",
});

export const fontSans = GDSherpa;
export const fontSage = GDSage;
