import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/theme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(accordion|breadcrumbs|button|card|checkbox|date-picker|divider|image|input|link|modal|navbar|pagination|radio|select|skeleton|slider|ripple|spinner|calendar|date-input|popover|listbox|scroll-shadow).js"
  ],
  theme: {
    extend: {
      colors: {
        'greenBG': '#74DFA2',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;
