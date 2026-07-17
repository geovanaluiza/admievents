export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      title: 'Admissions — Northwest University',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Visit, explore, and experience Northwest University in Kirkland, WA.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/nu-shield.png' },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: '',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,600;12..96,700;12..96,800&family=DM+Serif+Display:ital@0;1&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap',
        },
      ],
    },
  },

  css: ['~/assets/css/tokens.css', '~/assets/css/main.css'],

  runtimeConfig: {
    public: {
      FORMSPREE_URL: process.env.FORMSPREE_URL ?? '',
    },
  },

  nitro: {
    preset: 'static',
  },
})
