module.exports = {
  title: '吹口琴的喵~',
  description: '分享日常积累的相关公用方法、组件',
  base: '/',
  // cache: false,
  plugins: [ // 插件：demo-block样式、代码复制
    'demo-container', // demo-block预览
    ['vuepress-plugin-code-copy', true], // 代码复制
    [ // 回到顶部
      'vuepress-plugin-gotop-plus', {
        mobileShow: false, // 是否在移动设备上显示(default: true)
        threshold: 50 // 回到页首元素显示触发的高度阈值(default: 50)
      }
    ],
    [ // 看板娘
      'vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: false,
        live2d: {
          // 是否启用(关闭请设置为false)(default: true)
          enable: true,
          // 模型名称(default: hibiki)>>>取值请参考：
          // https://github.com/JoeyBling/hexo-theme-yilia-plus/wiki/live2d%E6%A8%A1%E5%9E%8B%E5%8C%85%E5%B1%95%E7%A4%BA
          model: 'hibiki',
          display: {
            position: "left", // 显示位置：left/right(default: 'right')
            width: 135, // 模型的长度(default: 135)
            height: 300, // 模型的高度(default: 300)
            hOffset: 160, //  水平偏移(default: 65)
            vOffset: 0, //  垂直偏移(default: 0)
          },
          mobile: {
            show: false // 是否在移动设备上显示(default: false)
          },
          react: {
            opacity: 0.8 // 模型透明度(default: 0.8)
          }
        }
      }
    ]
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    },
  },
  themeConfig: {
    smoothScroll: true,
    nav: [{
      text: '指南',
      link: '/zh/guide/'
    }, {
      text: '资源',
      link: '/zh/resource/'
    }, {
      text: '交流',
      link: 'https://awesomewdb.github.io/WangShare/'
    }],
    sidebarDepth: 2,
    // sidebar: 'auto'
    sidebar: {
      '/zh/guide/': [{
        title: '入门',
        collapsable: false, // false 让一个组永远都是展开状态
        children: [
          ['/zh/guide/introduction', '介绍'],
          ['/zh/guide/installation', '安装'],
          ['/zh/guide/quickstart', '快速上手'],
        ]
      }, {
        title: 'UI组件',
        collapsable: false,
        children: [
          ['/zh/guide/wang-ui/wang-el-search', 'wang-el-search'],
          ['/zh/guide/wang-ui/wang-van-search', 'wang-van-search'],
        ]
      }, {
        title: '工具函数',
        collapsable: false,
        children: [
          ['/zh/guide/wang-utils/date', 'date'],
          ['/zh/guide/wang-utils/storage', 'storage'],
          ['/zh/guide/wang-utils/request', 'request'],
        ]
      }],
      '/zh/resource/': [{
        title: '资源下载/地址',
        collapsable: false, // false 让一个组永远都是展开状态
        children: [
          ['/zh/resource/reset-css', 'reset.css'],
          ['/zh/resource/sites', '常用网站']
        ]
      }]
    }
  },
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: 'VuePress',
    //   description: 'Vue-powered Static Site Generator',
    //   "demo-block": {
    //     "hide-text": "Hide",
    //     "show-text": "Expand",
    //     "copy-text": "Copy",
    //     "copy-success": "Successful"
    //   }
    // },
    '/': {
      lang: 'zh-CN',
      "demo-block": {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
        "copy-text": "复制代码",
        "copy-success": "复制成功"
      }
    }
  },
  markdown: {
    lineNumbers: true
  }
}