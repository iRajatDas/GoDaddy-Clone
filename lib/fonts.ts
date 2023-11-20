import localFont from "next/font/local";

const GDSherpa = localFont({
  src: [
    {
      path: "../public/fonts/gdsherpa-vf.ttf",
    },
  ],
  preload: true,
  variable: "--gds-font-sans",
});

const GDSage = localFont({
  src: [
    {
      path: "../public/fonts/gd-sage-bold.ttf",
    },
  ],
  preload: true,
  variable: "--gds-font-sage",
});

export const fontSans = GDSherpa;
export const fontSage = GDSage;
