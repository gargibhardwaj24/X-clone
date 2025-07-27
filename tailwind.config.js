// tailwind.config.js
module.exports = {
  // Your existing config like theme, content, etc., for example:
  content: ["./src/**/*.html", "./src/**/*.js"], // adjust your paths accordingly
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
