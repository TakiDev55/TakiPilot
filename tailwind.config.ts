import type { Config } from 'tailwindcss';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const animate = require('tailwindcss-animate');

export default {
  content: ['./src/**/*.{ts,tsx}'],
  plugins: [animate],
} satisfies Config;
