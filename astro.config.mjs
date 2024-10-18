import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alonso510.github.io',
  trailingSlash: 'always', // This ensures all URLs have a trailing slash
  base: '/',
  build: {
    assets: '_assets'
  }
});




