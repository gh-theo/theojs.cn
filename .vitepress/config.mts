import { defineConfig } from 'vitepress'

import { head, transformPageData } from './configs'

export default defineConfig({
  title: 'Theo Homepage',
  lang: 'zh-Hans',
  description: 'Homepage',
  // appearance: 'force-dark',
  metaChunk: true,
  cleanUrls: true,
  sitemap: { hostname: 'https://theojs.cn' },
  head,
  transformPageData,
  themeConfig: {
    logo: 'https://i.theojs.cn/logo/avatar-mini.webp',
    siteTitle: false,
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
