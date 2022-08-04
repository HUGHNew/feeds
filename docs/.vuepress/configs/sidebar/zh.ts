import type { SidebarConfig } from '@vuepress/theme-default'
export const zh:SidebarConfig = {
    '/blogs/':[
        {
            text: "博文随记",
            children:[
                '/blogs/Android-App-Build',
                '/blogs/Android-Cleartext-HTTP',
                '/blogs/Android-Software',
                '/blogs/Android-Yolo5',
                '/blogs/ApplicationMenu-Customize',
                '/blogs/Context-References',
                '/blogs/Flask-uWSGI-nginx',
                '/blogs/Flex-Bison-QuickStart',
                '/blogs/Flask-uWSGI-in-Docker',
                '/blogs/Friendly-PowerShell',
                '/blogs/Gnome-OCR',
                '/blogs/Gradle.AGP',
                '/blogs/Lambda-Calculus-Detail',
                '/blogs/Linux-Search',
                '/blogs/Nvidia-smi-Failed',
                '/blogs/OS-Pak-Man',
                '/blogs/PlaintText-Placeholder',
                '/blogs/Python-Shell-Command',
                '/blogs/Quickview-on-adb',
                '/blogs/Rime-Ziranma',
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
                {
                    text:"Quick-Know Network",
                    children:[
                        '/handbook/network/TCP',
                        '/handbook/network/HTTP',
                        '/handbook/network/TLS',
                        '/handbook/network/DNS',
                    ]
                },
                {
                    text:"安全",
                    link:'/handbook/Security/index.html',
                    children:[
                        '/handbook/Security/hash',
                        '/handbook/Security/encrypt',
                    ]
                },
                '/handbook/Review-in-C++',
                '/handbook/Threads',
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
                    link:"/trans/KtCoroutines/index.html",
                    children:[
                        '/trans/KtCoroutines/Basics',
                        '/trans/KtCoroutines/Cancellation',
                        '/trans/KtCoroutines/Compose',
                        '/trans/KtCoroutines/Dispatcher',
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