import { getIconCollections, iconsPlugin } from "@egoist/tailwindcss-icons";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        regular: ["Sen Regular", "sans-serif"],
        "extra-bold": ["Sen ExtraBold", "sans-serif"],
      },
      screens: {
        footer: "1200px",
      },
    },
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["simple-icons"]),
    }),
  ],
};
