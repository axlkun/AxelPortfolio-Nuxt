// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { 'http-equiv': 'content-language', content: 'es' },
        // ...otras etiquetas meta
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-WCSKBPW0D4"
        },
        {
          innerHTML: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-WCSKBPW0D4');
          `
        },
        {
          async: true,
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1163363741001629",
          crossorigin: "anonymous"
        }
      ]
    }
  },

  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  devtools: { enabled: true },

  hooks: {
    'pages:extend'(pages) {
      // add a route
      pages.push(
        {
          name: 'article',
          path: '/blog/:slug',
          file: '~/pages/blog/[...slug].vue',
        },
        {
          name: 'project',
          path: '/proyectos/:slug',
          file: '~/pages/proyectos/[...slug].vue',
        }
      )
    }
  },
})
