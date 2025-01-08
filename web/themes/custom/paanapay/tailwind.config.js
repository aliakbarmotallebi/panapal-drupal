/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./assets/**/*.{twig,js}",
    "./templates/**/*.twig"
  ],
  theme: {
    extend: {
      fontFamily: {
        yekanbakh: ["yekanbakh"],
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
