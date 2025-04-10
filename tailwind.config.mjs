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
      xl: "1200px",
    },
    colors: {
      highlight: "#6202FF",
      wrapper: "rgba(98, 2, 255, 0.07)", 
       
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    fontSize: {
      "base": ["1rem", "1.15"],
      "lg": ["1.125rem", "1.15"],
      "2xl": ["1.5rem", "1.15"],
      "4xl": ["2.25rem", "1.15"],
      "4.5xl": ["2.625rem", "1.15"],
      "5xl": ["3rem", "1"],
      "5.5xl": ["3.375rem", "1"],
    },
  },
  plugins: [],
};
