module.exports = {
    base: '/crxpress/',
    title: 'Chrome Extend',
    description: '可定制浏览体验的小型扩展程序',
    head: [
        [ 'link', { rel: 'icon', href: '/google.png' } ]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/google.png',
        displayAllHeaders: true,
        smoothScroll: true,
        nav: [
            {
                text: '开发指南',
                link: '/devguide/'
            }, {
                text: 'manifest 配置',
                link: '/overview/manifest'
            }, {
                text: '网上商店发布和发行',
                link: '/publish/hosting'
            }
        ],
        sidebar: [{
            title: '介绍',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/introduce/about', '什么是扩展程序？'],
                ['/introduce/gettingStarted', '入门教程']
            ]
        }, {
            title: '概述',
            path: '/overview/',
            collapsable: false,
            sidebarDepth: 1,
            // children: [
            //     '/overview/',
            //     ['/overview/manifest', 'manifest 配置']
            // ]
        }, {
            title: '开发指南',
            path: '/devguide/',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                '/devguide/',
                ['/devguide/performance', '达到最佳表现']
            ]
        }, {
            title: '网上商店发布和发行',
            collapsable: false,
            sidebarDepth: 1,
            children: [
                ['/publish/hosting', '发布扩展']
            ]
        }]
    },
    plugins: {
        '@vuepress/medium-zoom': {
            selector: 'img.zoom-custom-imgs',
            options: {
                margin: 16,
                background: 'rgba(255, 255, 255, .7)'
            }
        },
        '@vuepress/back-to-top': {}
    }
}