const config = {
  plugins: ["@tailwindcss/postcss"],
};

export default config;
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
    },
  },
};
