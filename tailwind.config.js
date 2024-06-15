/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange-1": "var(--orange-1)",
        "orange-2": "var(--orange-2)",
        "orange-3": "var(--orange-3)",
        "orange-4": "var(--orange-4)",
        "orange-5": "var(--orange-5)",
        "orange-6": "var(--orange-6)",
        "orange-7": "var(--orange-7)",
        "orange-8": "var(--orange-8)",
        "orange-9": "var(--orange-9)",
        "orange-10": "var(--orange-10)",
        "gray-1": "var(--gray-1)",
      },
      fontFamily: {
        poppins: ["Raleway"],
      },
    },
  },
  plugins: [
    require("rippleui")
  ],
}

