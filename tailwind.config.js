export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5", // Web3-style deep blue
        secondary: "#1E1B4B", // Dark purple for depth
        accent: "#9333EA", // Vibrant accent for highlights
        background: "#0A0A0A", // Dark background for a sleek Web3 look
        card: "#13131A", // Slightly lighter than background for contrast
      },
    },
  },
  plugins: [require("daisyui")],
};
