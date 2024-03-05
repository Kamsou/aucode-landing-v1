import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Sen Regular", "sans-serif"],
        bold: ["Sen Bold", "sans-serif"],
        "extra-bold": ["Sen ExtraBold", "sans-serif"],
      },
      screens: {
        footer: "1200px",
      },
      colors: {
        "green-light": "#BFF92B",
        "green-dark": "#43473A",
        "gray-light": "#B6B6B6",
        background: "#F2F2F2",
        "bg-linear-1": "#232325",
        "bg-linear-2": "#19163B",
        "radial-start": "#D923FE",
        "radial-end": "#B779E4",
      },
      boxShadow: {
        button: "2px 4px 0px #363A30",
        "button-hover": "0px 1px 0px #363A30",
      },
      backgroundImage: {
        "radial-custom":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
      gradientColorStops: (theme: any) => ({
        ...theme("colors"),
        "radial-start": "#D923FE",
        "radial-end": "#B779E4",
      }),
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["simple-icons"]),
    }),
  ],
};
