import type { NavbarConfig } from '@vuepress/theme-default'

export const zh: NavbarConfig = [
    {
        text: "网站主页",
        link: "/"
    },
    {
        text: "个人主页",
        children: [
            {
                text: "gitee",
                link: "https://gitee.com/hughnew"
            },
            {
                text: "GitHub",
                link: "https://github.com/HUGHNew"
            },
        ]
    },
    {
        text: "目录导航",
        children: [
            {
                text: "博客",
                link: "/blogs/"
            },
            {
                text: "翻译",
                link: "/trans/"
            },
            {
                text: "学习导航",
                link: "/nav/"
            },
        ]
    }
]