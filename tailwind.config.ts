import type { Config } from "tailwindcss";

export default {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  screens: {
   sm: "480px",
   md: "768px",
   lg: "976px",
   xl: "1440px",
   "2xl": "1536px",
  },
  extend: {
   colors: {
    primary: "#357266",
    secondary: "#3A5E56",
    third: "#37413F",
   },
  },
 },
 plugins: [],
} satisfies Config;
