import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        "background-light": "#f7f7f7",
        "background-dark": "#191919",
        "border-gray": "#cccccc"
      },
      fontFamily: {
        display: "var(--font-inter)",
        mono: "var(--font-jetbrains-mono)",
      },
    },
  },
  plugins: [],
}
export default config
