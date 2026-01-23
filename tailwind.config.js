/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     fontFamily: {
      body: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        '"Fira Sans"',
        '"Droid Sans"',
        '"Helvetica Neue"',
        'sans-serif',
      ],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Courier New"',
        'monospace',
      ],
    },
      colors: {
        /* 
          1. Storyblok holds design tokens in Storyblok databases
          2. Tailwind defines tokens and safelists all options
          3. Styles directly applied to component via props (i.e. - blok.background_color = bg-white) 
        */


        // text and button options
          primary: '#003666',
          secondary: '#0062B1',
          accent: colors.sky[600],
          highlight: colors.blue[600],
          light: colors.sky[200],
          default: colors.gray[800],
          // text-white - default tailwind class

        // background options
          // bg-transparent - default tailwind class
          // bg-white - default tailwind class
          'light-gray': colors.sky[50],
          'light-blue': colors.sky[100],
          // gradient - defined in plugins below
      },
    },
  },
  safelist: [

    // Background colors
    "bg-light-gray",
    "bg-light-blue",
    "bg-gradient",
    "bg-white",
    "bg-transparent",

    // Text colors
    "text-primary",
    "text-secondary",
    "text-accent",
    "text-highlight",
    "text-light",
    "text-default",


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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-gradient': {
          backgroundImage: 'linear-gradient(to bottom right, #003666, #0062B1)',
        },
      })
    },
  ],
}