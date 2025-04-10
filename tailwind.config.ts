import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#011627",
        secondary:"#4D5BCE",
        tertiary:"#43D9AD",
        quaternary:"#E99287",
        quinary:"#607B96",
        gray: "#E5E9F0",
        dark: "#011221",
        light:"#5565E8",
        tertiary2:"#FEA55F",
        quaternary2:"#C98BDF",
        quinary2:"#1C2B3A",
      },
      height: {
        "h-main": "calc(100vh - 115px)",
      },
      backgroundImage: {
        "AbstractDesign": "url('/AbstractDesign.png')",
        "bg1": "url('/bg-1.png')",
        "SiteFilm1": "url('/SiteFilm1.png')",
        "SiteFilm2": "url('/SiteFilm2.png')",
        "SiteFilm3": "url('/SiteFilm3.jpg')",
      },
      fontFamily: {
        FiraCode: ["FiraCode", "monospace", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
