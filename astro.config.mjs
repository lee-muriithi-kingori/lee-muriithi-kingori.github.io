import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://leekingori.lestramk.org',
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
