// @ts-check
import { defineConfig } from 'astro/config';

import svelte from '@astrojs/svelte';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.oseelabs.org',
  integrations: [svelte(), sitemap({
    filter: (page) => page !== 'https://www.oseelabs.org/admin',
    i18n: {
      defaultLocale: 'en',
      locales: {
        'en': 'en-US', 
        'es': 'es-ES',
        'fr': 'fr-CA',
      },
    },
  }), react()],
});