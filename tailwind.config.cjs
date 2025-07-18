/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollSnapType: {
        "y-mandatory": "y mandatory",
      },
   },
  plugins: [],
 }
};
