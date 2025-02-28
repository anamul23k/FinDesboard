/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body_bg: "#0E131A",
        inactive_txt: "#C4C4C4",
        red_txt: "#CD5656",
        card_bg: "#272D35",
        purple: "#5948B7",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(95.04deg, #52449B 15.04%, #7D12AF 89.27%)",
        "custom-gradient2":
          "linear-gradient(102.27deg, #A453CB 0%, #8B10B6 100%)",
      },
    },
  },
  plugins: [],
};
