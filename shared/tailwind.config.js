/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./templates/**/app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:  "var(--primary)",
        secondary: "var(--secondary)",
        dark:      "var(--dark)",
        accent:    "var(--accent)",
        warm:      "var(--warm)",
        "blue-gray": "var(--blue-gray)",
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
