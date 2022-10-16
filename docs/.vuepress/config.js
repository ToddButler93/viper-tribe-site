const { path } = require('@vuepress/utils')
const { description } = require('../../package')

module.exports = {
    // site config
    lang: 'en-US',
    title: 'Viper Tribe',
    description: description,
    // theme and its config
    extends: '@vuepress/theme-default',
    themeConfig: {
      logo: 'https://hybrismedianonprods1.blob.core.windows.net/sys-master-phoenix-images-container/h6c/h6b/9559620911134/razer-ths-logo.svg',
      contributors: false,
      navbar: [
        // NavbarItem
        {
          text: 'Home',
          link: '/',
        },
        {
          text: 'Tribe Gear',
          link: '/tribe-gear/',
        },
        {
          text: 'Endorsements',
          link: '/endorsements/',
        },
        // NavbarGroup
        {
          text: 'Viper Family',
          children: [
            {
              text: 'Compare',
              link: '/family/compare',
            },
            {
              text: 'V2 Pro',
              link: '/family/v2pro',
            },
            {
              text: 'Ultimate',
              link: '/family/ultimate',
            },
            {
              text: '8k',
              link: '/family/8k',
            },
            {
              text: 'Mini',
              link: '/family/mini',
            },
        ],
        },
      ],
    },
  }