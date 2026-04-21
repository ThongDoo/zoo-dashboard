// Tailwind v4 uses a dedicated PostCSS plugin and no longer requires autoprefixer
// (vendor prefixing is handled internally by Lightning CSS).
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
