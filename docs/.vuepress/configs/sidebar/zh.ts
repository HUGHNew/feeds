import type { SidebarConfig } from '@vuepress/theme-default'
export const zh:SidebarConfig = {
    '/blogs/':[
        {
            text: "博文随记",
            children:[
                '/blogs/Android-Cleartext-HTTP',
                '/blogs/Android-Software',
                '/blogs/Android-Yolo5',
                '/blogs/ApplicationMenu-Customize',
                '/blogs/Context-References',
                '/blogs/Flask-uWSGI-nginx',
                '/blogs/Flask-uWSGI-in-Docker',
                '/blogs/Friendly-PowerShell',
                '/blogs/Gnome-OCR',
                '/blogs/Lambda-Calculus-Detail',
                '/blogs/Nvidia-smi-Failed',
                '/blogs/OS-Pak-Man',
                '/blogs/PlaintText-Placeholder',
                '/blogs/Python-Shell-Command',
                '/blogs/Ubuntu-Disk-Resize',
                '/blogs/Windows-Pkg-Man',
                '/blogs/Windows7-on-VMWare',
                '/blogs/WireShark_SSL_Decrypt',
                '/blogs/xmake-quick-start',
            ]
        }
    ],
    '/handbook/':[
        {
            text: "工具手册",
            children:[
                {
                    text:"*nix tools",
                    link:'/handbook/LinuxTools/index.html',
                    children:[
                        '/handbook/LinuxTools/awk',
                        '/handbook/LinuxTools/sed',
                        '/handbook/LinuxTools/cron',
                        '/handbook/LinuxTools/screen',
                        '/handbook/LinuxTools/wget',
                        '/handbook/LinuxTools/curl',
                        '/handbook/LinuxTools/tar',
                    ]
                },
                {
                    text:"Docker Utility",
                    children:[
                        '/handbook/Docker/run',
                        '/handbook/Docker/control',
                        '/handbook/Docker/volume',
                        '/handbook/Docker/entry',
                    ]
                },
                {
                    text:"Trip in Golang",
                    link:'/handbook/GoLang/index.html',
                    children:[
                        '/handbook/GoLang/nil',
                        '/handbook/GoLang/initialization',
                        '/handbook/GoLang/defer',
                        '/handbook/GoLang/len&cap',
                    ]
                },
                '/handbook/HTTP',
                '/handbook/Review-in-C++',
                '/handbook/flex-bison',
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
                        '/trans/logic/intro'
                    ]
                },
                {
                    text:"Kotlin Coroutines Doc",
                    children:[
                        '/trans/KtCoroutines/Basics',
                        '/trans/KtCoroutines/Cancellation'
                    ]
                },
                {
                    text:"regex",
                    children:[
                        '/trans/regex/A-Regular-Expression-Matcher'
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