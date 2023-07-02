/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        pfp: "url('../../public/assets/pfp.jpg')",
        lib: "url('../../public/assets/lib.jpg')",
        data: "url('../../public/assets/data.jpg')",
        electric: "url('../../public/assets/electric.jpg')",
        fuel: "url('../../public/assets/fuel.jpg')",
      },
      fontFamily: {
        JetBrainsMono: ["JetBrains Mono", "monospace"],
        Poppins: ["Poppins", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Merriweather: ["Merriweather", "sans-serif"],
        Lato: ["Lato"],
        Montserrat: ["Montserrat"],
        Bebas: ["Bebas Neue"],
        Sacramento: ["Sacramento"],
        Belle: ["La Belle Aurore"],
      },
    },
  },
  plugins: [],
};
