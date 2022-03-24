import type { SidebarConfig } from '@vuepress/theme-default'
export const zh:SidebarConfig = {
    '/blogs/':[
        {
            text: "博文随记",
            children:[
                '/blogs/Android-Cleartext-HTTP.md',
                '/blogs/Android-Software',
                '/blogs/Android-Yolo5.md',
                '/blogs/ApplicationMenu-Customize.md',
                '/blogs/Context-References.md',
                '/blogs/Flask-uWSGI-nginx',
                '/blogs/Friendly-PowerShell.md',
                '/blogs/Gnome-OCR.md',
                '/blogs/Lambda-Calculus-Detail.md',
                '/blogs/Nvidia-smi-Failed',
                '/blogs/OS-Pak-Man',
                '/blogs/PlaintText-Placeholder',
                '/blogs/Python-Shell-Command',
                '/blogs/Windows-Pkg-Man.md',
                '/blogs/Windows7-on-VMWare.md',
                '/blogs/WireShark_SSL_Decrypt.md',
                '/blogs/Ubuntu-Disk-Resize.md',
            ]
        }
    ],
    '/handbook/':[
        {
            text: "工具手册",
            children:[
                {
                    text:"*nix",
                    children:[
                        '/handbook/awk.md',
                        '/handbook/sed.md',
                        '/handbook/cron.md',
                        '/handbook/screen.md',
                        '/handbook/wget.md',
                        '/handbook/curl.md',
                    ]
                },
                {
                    text:"Docker Utility",
                    children:[
                        '/handbook/docker-run.md',
                        '/handbook/docker-control.md'
                    ]
                },
                '/handbook/HTTP.md',
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
                        '/trans/KtCoroutines/Basics',
                        '/trans/KtCoroutines/Cancellation'
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