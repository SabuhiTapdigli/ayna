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
          450: "#979797",
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
        "blue-500": "#155EEF",
        gray: {
          50: "#F8FAFC",
          100: "#ECF1F8",
          200: "#E3E8EF",
          300: "#CDD5DF",
        },
      },
      borderRadius: {
        "4xl": "32px",
        "5xl": "40px",
      },
      borderColor: {
        blue: {
          500: "#2970FF",
        },
        lineBlue: "#2A3D63",
        gray: {
          200: "#E3E8EF",
          300: "#CDD5DF",
          500: "#697586",
        },

        "blue-500": "#2970FF",
      },
      content: {
        chevronLeft: 'url("./assets/images/chevron-left.svg")',
        chevronRight: 'url("./assets/images/chevron-right.svg")',
        chevronRightWhite: 'url("./assets/images/chevron-right-white.svg")',
        chevronLeftBlue: 'url("./assets/images/chevron-left-blue.svg")',
      },
      boxShadow: {
        sm: " 0px 8px 24px 0px rgba(19, 37, 70, 0.08)",
        md: "0px 12px 24px 0px rgba(19, 37, 70, 0.10)",
      },
      backgroundImage: {
        projectBg: "url(/assets/images/projects.svg)",
      },
      gridTemplateColumns: {
        partner: "384px 712px",
      },
    },
  },
  plugins: [],
};
