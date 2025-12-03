import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ramizbhai24-7.github.io',
  base: '/RAMIZBHAI-PINJARA',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});