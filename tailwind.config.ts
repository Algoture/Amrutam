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
        act:"#3A643B",
        fl:"#FFFBF2",
        cardsBg:"#FFF7E2",
        navtext:"#474747",
      },
    },
  },
  plugins: [],
} satisfies Config;
