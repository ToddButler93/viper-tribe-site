const { description } = require('../../package')

module.exports = {
    title: 'Viper Tribe',
    description: description,
  
    head: [
      ['meta', { name: 'theme-color', content: '#3eaf7c' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],
  
    themeConfig: {
        repo: 'https://github.com/ToddButler93/viper-tribe-site/',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
          {
            text: 'Knowledge',
            link: '/knowledge/',
          },
          {
            text: 'Testimonials',
            link: '/testimonials/',
          },
          {
            text: 'Config',
            link: '/config/'
          },
          {
            text: 'Official Razer™ Page',
            link: 'https://www.razer.com/gaming-mice/razer-viper-ultimate'
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Guide',
              collapsable: false,
              children: [
                '',
                'using-vue',
              ]
            }
          ],
        }
      },
    
      /**
       * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
       */
      plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
      ]
  }