/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
      extend: {
        colors: {
          // Primary brand colors
          accord: {
            dark: "#0A4B3E", // Dark green for text and accents
            DEFAULT: "#0E6D5B", // Main green
            light: "#21A68C", // Lighter green
            mint: "#40D5B5", // Turquoise/mint from the leaves
          },
          // Accent colors
          gold: {
            light: "#E6D5A7", // Light gold
            DEFAULT: "#D4B363", // Gold tone from the logo
            dark: "#B89B4E", // Darker gold
          },
          // Neutral colors
          background: {
            light: "#FFFFFF", // White for backgrounds
            DEFAULT: "#F9F9F9", // Slightly tinted white
            dark: "#F3F4F6", // Light gray for sections
          }
        },
      },
    },
    plugins: [],
  };