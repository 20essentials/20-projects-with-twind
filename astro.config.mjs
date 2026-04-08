// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  build: {
    assets: 'static'
  },
  base: import.meta.env.DEV ? undefined : '/20-projects-with-twind/',
  site: import.meta.env.DEV
    ? 'http://localhost:4321/'
    : 'https://20essentials.github.io/20-projects-with-twind/',

  integrations: [react()]
});
