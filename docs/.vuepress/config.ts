import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'
import { navbar, sidebar } from './configs'
export default defineUserConfig<DefaultThemeOptions>({
  // 站点配置
  lang: 'zh-CN',
  title: 'Hugh\'s Notes',
  description: '个人笔记/博客站点 by Vuepress',
  head:[
    ['link',{rel:'icon',href:'https://avatars.githubusercontent.com/HUGHNew?s=16'},],
  ],

  // plugins
  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'https://avatars.githubusercontent.com/HUGHNew?s=32',
    repo: 'HUGHNew/Site',
    editLinkText: "有问题/疑惑？",
    editLinkPattern:"https://github.com/HUGHNew/Site/issues/new/choose",
    sidebar: sidebar.zh,
    navbar: navbar.zh,
    // 404 page
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这里是文档的荒漠',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    backToHome: '返回首页',
  },
})