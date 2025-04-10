/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "520px",
      lg: "976px",
    },
    colors: {
      highlight: "#6202FF",
      wrapper: "rgba(98, 2, 255, 0.07)", 
       
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "4.5xl": ["2.625rem", "1.15"],
      "5.5xl": ["3.375rem", "1"],
    },
  },
  plugins: [],
};
