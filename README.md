## 简介

借鉴改造的后台管理系统，仅供个人学习，在此查看[原项目地址](https://github.com/gcddblue/vue-admin-webapp)

- [在线预览-github](https://gcddblue.github.io/vue-admin-webapp)
- [在线预览-gitee](https://gcddblue.gitee.io/vue-admin-webapp) （推荐国内用户）

**目前版本基于 `webpack 4.0+` 和 `vue-cli 3.x` 版本构建，需要 [Node.js](https://nodejs.org/) 8.9 或更高版本（推荐 8.11.0+），相关知识可以自行进官网进行了解**

## 快速开始

> 在开始之前，请确保在本地安装 node 和 webpack 及 git。 本项目涉及的技术栈主要有 [ES6](http://es6.ruanyifeng.com/) 、[vue](https://cn.vuejs.org/) 、[vuex](https://vuex.vuejs.org/zh/) 、[vue-router](https://router.vuejs.org/zh/) 、[vue-cli](https://cli.vuejs.org/zh/guide/) 、[axios](http://www.axios-js.com/) 、[webpack](https://www.webpackjs.com/) 、[element-ui](https://element.eleme.io/#/zh-CN) 、[easyMock](https://www.easy-mock.com/) ,所以你最好提前熟悉了解这些知识，这将对你认识学习该项目有很大帮助

### 安装

```
# 克隆项目
git clone git@github.com:gcddblue/vue-admin-webapp.git

# 进入项目目录
cd vue-admin-webapp

# 安装依赖
npm install

# 启动服务
npm run serve
```

### 项目目录

```
├── public                     # 静态资源
│   ├── favicon.ico            # favicon图标
│   └── index.html             # html模板
├── src                        # 源代码
│   ├── api                    # 所有请求
│   ├── assets                 # 图片、字体等静态资源
│   ├── components             # 全局公用组件
│   ├── layout                 # 页面整体布局盒子
│   ├── mixins                 # 全局混入模块
│   ├── plugins                # 全局插件部分
│   ├── router                 # 路由
│   ├── store                  # 全局store管理
│   ├── style                  # 全局样式
│   ├── utils                  # 全局公用方法
│   ├── vendor                 # 公用vendor（excel导入导出）
│   ├── views                  # views所有页面
│   ├── App.vue                # 入口页面
│   ├── main.js                # 入口文件 加载组件 初始化等
├── .borwserslistrc            # 浏览器兼容相关
├── .env.xxx                   # 环境变量配置&emsp;
├── .eslintrc.js               # eslint 配置项
├── .gitignore.js              # git忽略文件设置
├── .babelrc.config.js         # babel-loader 配置
├── package.json               # package.json
├── postcss.config.js          # postcss 配置
└── vue.config.js              # vue-cli 配置

```

### Online

[在线浏览](https://gcddblue.gitee.io/vue-admin-webapp)

Copyright (c) 2019 Maze
