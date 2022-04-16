module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: {
        //   DEFAULT: "1rem",
        //   sm: "2rem",
        //   lg: "4rem",
        //   xl: "5rem",
        //   "2xl": "6rem",
        // },
      },
      colors: {
        myblue: "#2D98DA",
        mydarkblue: "#0288DB",
        myred: "#F95E63",
        mydark: "#353B48",
        mygreen: {
          1: "#26DE81",
          2: "#20BF6B",
        },
      },
    },
  },
  plugins: [],
};
