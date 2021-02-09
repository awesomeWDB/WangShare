# 快速上手
本节将介绍如何在项目中使用 Element。

## 完整引入 Element
推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。
``` javascript
npm i element-ui -S
```

## 按需引入 Element
目前可以通过 `unpkg.com/element-ui` 获取到最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。
``` html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
```
