---
title: DOM TO IMAGE
date: 2017-05-27
tags:
- qrcode
- Javascipt
- Canvas
categories:
- Javascipt
---
近期收到个需求要把二维码、背景图和文字合成一张图片供用户下载，效果如下图：

![5926c41dc589a.png](https://ooo.0o0.ooo/2017/05/27/59296905c6856.png)

因为二维码和商户名称是要动态变化的，所以想到是看有没有办法把 DOM 结构给转换成图片。去 GitHub 搜寻一番，最终找到两个库解决了该需求。

- [qrcode](https://github.com/davidshimjs/qrcodejs)
- [dom-to-image](https://github.com/tsayen/dom-to-image)

下载的话，这边有两种办法：

1、利用 HTML5 的最新属性 download
```js
<a href="large.jpg" download>下载</a>
```

2、[canvas导出为图片并用JS下载](https://www.baidufe.com/item/65c055482d26ec59e27e.html)

具体例子：[DEMO](http://demo.sinchang.me/dom-to-image/index.html)
