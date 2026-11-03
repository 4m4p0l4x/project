import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://4m4p0l4x.github.io',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/project' : undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});

