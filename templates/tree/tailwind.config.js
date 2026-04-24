/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary:   "var(--primary)",
        secondary: "var(--secondary)",
        dark:      "var(--dark)",
        accent:    "var(--accent)",
        warm:      "var(--warm)",
        "blue-gray": "var(--blue-gray)",
      },
    },
  },
  plugins: [],
};
