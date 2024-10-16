import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1677ff',
        success:'#52c41a',
        warning:'#faad14',
        error:'#ff4d4f',
        gray:{
          50:'#fafafa',
          100:'#f5f5f5',
          200:'#d9d9d9',
          300:'#bfbfbf',
          400:'#8c8c8c',
          500:'#595959',
          600:'#434343',
          700:'#262626',
          800:'#1f1f1f',
          900:'#141414',
          950:'#000000'
        }
      }
    }
  },
  plugins: [addDynamicIconSelectors()]
};
