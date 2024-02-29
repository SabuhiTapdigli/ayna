/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#EFF4FF",
          100: "#D1E0FF",
          500: "#2970FF",
          600: "#155EEF",
          900: "#00359E",
        },
        gray: {
          300: "#D0D5DD",
          400: "#9AA3B2",
        },
        black: {
          800: "#202939",
          900: "#121926",
        },
        white: "#FFFFFF",
      },
      fontSize: {
        "3xl": "2rem",
        "4xl": "2.5rem",
      },
      backgroundColor: {
        "blue-50": "#EFF4FF",
        gray: {
          100: "#ECF1F8",
          200: "#E3E8EF",
          300: "#CDD5DF",
        },
      },
      borderRadius: {
        "3xl": "32px",
        "4xl": "40px",
      },
      borderColor: {
        blue: {
          500: "#2970FF",
        },
        gray: {
          300: "#CDD5DF",
          200: "#E3E8EF",
        },

        "blue-500": "#2970FF",
      },
      content: {
        chevronLeft: 'url("./assets/images/chevron-left.svg")',
        chevronRight: 'url("./assets/images/chevron-right.svg")',
      },
      boxShadow: {
        md: "0px 12px 24px 0px rgba(19, 37, 70, 0.10)",
      },
      backgroundImage: {
        projectBg: "url(/assets/images/projects.svg)",
      },
    },
  },
  plugins: [],
};
