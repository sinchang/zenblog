---
title: H5 与 Native 如何进行交互总结
date: 2017-01-14
tags:
- JavaScript
- Native
- WebView
- H5
categories:
- Javascipt
---
最近完成了一个 H5 项目，是内嵌在公司的 App 里面，所以会涉及到与客户端进行交互。

### 如何交互
客户端给我们前端定义了一些 `action`，我们只需传相应的 `action` 和具体参数，他们接收后去执行不同的逻辑。由于 Andorid 与 iOS 接收 `action` 的方式不同，所以我自己封装了一个方法。

 - Android: 只接收字符串。
 - iOS: 可以接收 JSON 格式的数据，但只能是一维的，多维的要转成字符串。

```
/**
* 判断是否是Android系统
* @returns {boolean}
*/

var isAndroid = function () {
   var u = navigator.userAgent;
   return u.indexOf("Android") > -1 || u.indexOf("Linux") > -1;
}

/**
* 判断是否是iOS系统
* @returns {boolean}
*/

var isiOS = function () {
   var u = navigator.userAgent;
   return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
}

/**
* 跨平台交互
* @param options
*/

function crossHandler(options) {
    if (isiOS()) {
       window.webkit.messageHandlers.wqbModel.postMessage(options);
   }
   if (isAndroid()) {
       options = JSON.stringify(options);
       window.Android.wapShare(options);
   }
}
```
<!--  more -->
例子：
```
// 显示原生的 loading 效果
crossHandler({
    action: 'native_loading_show'
})
```
```
// 隐藏原生的 loading 效果
crossHandler({
    action: 'native_loading_dismiss'
})
```
```
// H5 眺原生，跳转到用户详情
crossHandler({
    action: 'user_info',
    user_id: '1'
})
```
有时我们还会用到让客户端来执行 JavaScript 方法，这必须保证方法要暴露到 window 上，简单的测试就是在 `console` 里看能不能执行该方法。

用到比较多的是在导航栏生成一个按钮，用户点击的时候来执行 JavaScript 方法。

我们是这么定义的：
```
window.nativeFunc = {
    save: function () {
        // todo
    },
    submit: function () {
        // todo
    }
}
crossHandler({
    action: 'native_menu_item',
    func: 'nativeFunc.save()'
})
```

由于客户端无法捕捉到非 `a` 链接的跳转，所以为了更接近原生的效果，通过 `location.href` 的跳转，我们都传 `action` 给客户端，让他们来执行跳转。
```
crossHandler({
    action: 'native_push',
    url: 'https://google.com'
})
```

### 睬坑
在做图片上传的时候，踩了个大坑，iOS 上一切上传正常，Android 有些手机点击上传按钮始终无响应，最后还是定义了个 `action`，让 Android 帮我们上传到服务器，再把图片链接扔给前端。虽然比较麻烦，但没必要去处理兼容性了……
