/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px", // Small screens
        md: "950px", // Medium screens
        lg: "1300px", // Large screens
        xl: "1500px", // Extra-large screens
        // Add more screens as needed
      },
    },
  },
  plugins: [],
};
