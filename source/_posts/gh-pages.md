---
title: 如何自动化部署项目到 gh-pages
tags:
- GitHub
- Travis CI
categories:
- IT
---
最近在写 [Vue.js](https://cn.vuejs.org/) 和 React 的项目，会涉及到项目部署的问题，由于我自己没有购买服务器，所以选择了使用 [GitHub](https://github.com) 来托管。为了避免每次的手动 push，找了 2 种把项目自动化部署到 gh-pages 的方法。

# Travis CI

具体介绍文章见：[使用 Travis CI 自动更新 GitHub Pages](http://notes.iissnan.com/2016/publishing-github-pages-with-travis-ci/)

下面是我项目[vstar](https://github.com/sinchang/vstar) 的 `.travis.xml` 供参考。

```js
language: node_js
node_js: stable

cache:
  directories:
    - node_modules

install:
  - npm install

script:
  - npm run build

after_script:
  - cd dist
  - git init
  - git config user.name "sinchang"
  - git config user.email "sinchangwen@gmail.com"
  - git add .
  - git commit -m "Update"
  - git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages

branches:
  only:
    - master

env:
  global:
    - GH_REF: github.com/sinchang/vstar.git
    - secure: feI1KtnK8zvt9B4nYgjYVkMcUsPhNQG3zvDoq+ILm0u2BDocmkcWCfL6kJUSbHOftU3CMg7UsJCPFhd2CTwM6JigNgMxmqjYQAgszffAjqcctxiRSUIL4rm3b8u+T6/sx9nVHcka2hytIzyFZ4X2xI8gbm2tRAhBdrc57kGAtSeCIBBZ6Fy45sKUZ0h8sTFjN9dVv6r2nOW5UIlIY4DFc++8geMDEj18mk8RQSs9b9AW3N9uD47V8HnzL4vF3j+X0+pvFhq8k6HGiJLGHIoHc9h8yf/u86y2wSYZDtPfDAZCuv4H1N/Vhj8Zk6yAFuBX0cneajE294/JZj3nOWZSQuL25jOYMWy02c66buajvCrDyHmXTMNCz5maqOIzk5uevbBUAC/NKSPwt8LELHhTuSOZFbj2OkSBL0jXZCDGjVv0idaAEVTjbcFNTmvzZHhj/q8Ja6bLHzeugPCDWWPeR5g1O5GbI31V1/zvMM6uVHyiAleQEGkXw0xB7GkQmPy5USm38Gkuk5utUEs9QlitZDgV4LtoggnC2Z83wcdNs+J2FCRQsriWa8jOFWLPVt6x2u3NmihaAARvwbcQDpiuyLGVi5n3prS/KrzkMxq1oNfzBpGzI3a94uVxKxtdk1rJc8PMogK10MtNG1ueVOOgB79Pkxd++W2RD8dpxpIrXuo=
```

Travis CI 的优势就是我们只管 push 源代码就行，它会自动帮我们 build 并 push 到 gh-pages。

# 使用 npm package gh-pages

使用 gh-pages 的话，首先需要 `npm install gh-pages --save-dev` 到项目的依赖中。
```js
{
  "private": true,
  "name": "smms",
  "description": "My pioneering Vue app",
  "version": "0.0.0",
  "repository": {},
  "scripts": {
    "test": "echo lol",
    "lint": "vbuild --eslint",
    "dev": "vbuild -d",
    "build": "vbuild",
    "deploy": "npm run build && gh-pages -d dist"
  },
  "devDependencies": {
    "clipboard": "^1.6.1",
    "gh-pages": "^0.12.0",
    "native-toast": "^1.1.0",
    "nprogress": "^0.2.0",
    "unfetch": "^2.1.2",
    "vbuild": "^6.0.0",
    "vue-img-inputer": "^1.0.23"
  },
  "license": "MIT"
}
```
在 `scripts` 中指定快捷命令 `"deploy": "npm run build && gh-pages -d dist"`，其中 dist 就是指定我们要部署的目录，`npm run build` 非必须，但一般是连在一起使用。最后 `npm run deploy` 即可完成部署。