import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://brokendreams.co.uk',
    integrations: [sitemap()],
  });