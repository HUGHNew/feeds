import type { SidebarConfig } from '@vuepress/theme-default'
export const zh:SidebarConfig = {
    '/blogs/':[
        {
            text: "博文随记",
            children:[
                '/blogs/Android-Yolo5.md',
                '/blogs/Windows7-on-VMWare.md',
                '/blogs/Friendly-PowerShell.md',
                '/blogs/WireShark_SSL_Decrypt.md',
                '/blogs/Gnome-OCR.md',
                '/blogs/Lambda-Calculus-Detail.md',
                '/blogs/Ubuntu-Disk-Resize.md',
                '/blogs/ApplicationMenu-Customize.md',
                '/blogs/Windows-Pkg-Man.md',
                '/blogs/Android-Software',
                '/blogs/OS-Pak-Man',
                '/blogs/Nvidia-smi-Failed',
            ]
        }
    ],
    '/handbook/':[
        {
            text: "工具手册",
            children:[
                '/handbook/awk.md',
                '/handbook/sed.md',
                '/handbook/Kotlin-Reference.md',
                '/handbook/cron.md',
                '/handbook/screen.md',
                {
                    text:"Docker Utility",
                    children:[
                        '/handbook/docker-run.md',
                        '/handbook/docker-control.md'
                    ]
                },
            ]
        }
    ],
    '/trans/':[
        {
            text: "翻译小集",
            children:[
                {
                    text:"逻辑",
                    children:[
                        '/trans/logic/intro.md'
                    ]
                },
                {
                    text:"Kotlin Coroutines Doc",
                    children:[
                        '/trans/KtCoroutines/Basics'
                    ]
                }
            ]
        }
    ],
    '/nav/':[
        {
            text: "学习路线导航"
        }
    ]
}