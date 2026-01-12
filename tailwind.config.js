/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    //text colors - make sure this matches the Storyblok color databases
    "text-white",
    "text-grey-800",
    "text-[#003666]",
    "text-sky-700",
    "text-blue-600",

    // text sizes
    "text-base",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
    "text-7xl",

    // margins
    "mb-0",
    "mb-1",
    "mb-2",
    "mb-4",
    "mb-6",
    "mb-8",
  ],
  plugins: [],
}