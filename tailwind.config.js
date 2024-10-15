import { addDynamicIconSelectors } from '@iconify/tailwind';
import * as tailwindcssAnimate from 'tailwindcss-animate';
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
  },
  plugins: [tailwindcssAnimate,addDynamicIconSelectors()],
});