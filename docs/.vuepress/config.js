import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
const { description } = require('../../package')

export default defineUserConfig({
  lang: 'en-US',
  title: 'Viper Tribe',
  description: description,
  theme: defaultTheme({
    logo: 'https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg',
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
  }),
})