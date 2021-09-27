export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'hobit-ui',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [{
      type: 'text/javascript', 
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jsmpeg/0.1/jsmpg.js',
      'data-account': 'XXXXX',
      'data-user': 'XXXXX',
      async: true
    }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vuesax/dist/vuesax.css', 
    'boxicons/css/boxicons.min.css',
    '~/assets/scss/layout.scss',
 
  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~plugins/vuesax.js' },
    {src: '~/plugins/vue-videojs7.js', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/vuetify',
    'nuxt-socket-io',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'nuxt-socket-io',
  ],

  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://localhost:3000'
    }]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['axios'],
    hotMiddleware:{
      client:{
        quiet:true
      }
    }
  },

  axios:{
    baseURL: 'http://localhost:8080'
    //credentials: true,
    //retry: false
  },
}
