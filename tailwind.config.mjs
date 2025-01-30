/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "site-main-blue": "#336EFF",
        "site-main-gray": "#555555",
        "site-main-yellow": "#FFAE00",
        "site-main-black": "#222222",
      },
      backgroundImage: {
        "custom-gradient-blue":
          "linear-gradient(270deg, #336EFF 0%, #0035B7 100%)",
        "custom-gradient-blue-yellow":
          "linear-gradient(90deg, #336EFF 0%, #E3D000 100%)",
      },
      screens: {
        xs: "280px",
        sm: "330px",
        md: "768px",
        lg: "1024px",
        xlg: "1280px",
        xl: "1400px",
        xxl: "1780px",
      },
      boxShadow: {
        custom: "0px 0px 12px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
