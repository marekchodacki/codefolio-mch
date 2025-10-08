import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://marekchodacki.pl',
  i18n: {
    locales: ['pl', 'en'],
    defaultLocale: 'pl',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
})
