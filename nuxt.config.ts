// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  devtools: { enabled: true },

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
